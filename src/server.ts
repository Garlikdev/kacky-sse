import express from 'express';
import http from 'http';
import { DashboardResponse, getUserData } from "./mockData.js";

const app = express();
const server = http.createServer(app);

// Add CORS middleware for other routes if needed
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update with your client origin
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Connection management improvements
const activeConnections = new Map<string, express.Response>();
let updateInterval: NodeJS.Timeout | null = null;

const deepClone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

const getUserId = (req: express.Request): string =>
  `user-${Math.random().toString(36).slice(2, 11)}`;

let dashboardData = deepClone(DashboardResponse);

// Improved simulation control with error handling
const startUpdates = () => {
  if (!updateInterval) {
    updateInterval = setInterval(() => {
      dashboardData = {
        ...dashboardData,
        servers: dashboardData.servers.map(server => ({
          ...server,
          timeLeft: server.timeLeft > 0 ? server.timeLeft - 1 : server.timeLimit
        }))
      };

      activeConnections.forEach((res, userId) => {
        if (!res.headersSent) return;
        if (res.writableEnded) {
          activeConnections.delete(userId);
          return;
        }

        try {
          res.write(`data: ${JSON.stringify({
            global: dashboardData,
            user: getUserData(userId)
          })}\n\n`);
        } catch (err) {
          console.log(`Cleaning up broken connection: ${userId}`);
          activeConnections.delete(userId);
        }
      });
    }, 1000);
  }
};

// Enhanced SSE endpoint
app.get('/sse', (req, res) => {
  // Set CORS headers specifically for SSE
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // For Nginx proxies
  res.flushHeaders();

  const userId = getUserId(req);
  activeConnections.set(userId, res);

  // Send initial data
  const sendInitial = () => {
    try {
      res.write(`: Connected ${userId}\n\n`);
      res.write(`data: ${JSON.stringify({
        global: dashboardData,
        user: getUserData(userId)
      })}\n\n`);
    } catch (err) {
      console.log(`Failed initial send to ${userId}`);
      activeConnections.delete(userId);
    }
  };

  sendInitial();

  // Start updates on first connection
  if (activeConnections.size === 1) {
    startUpdates();
  }

  // Connection cleanup
  const cleanup = () => {
    if (activeConnections.has(userId)) {
      activeConnections.delete(userId);
      console.log(`Properly cleaned up ${userId}`);
      
      if (activeConnections.size === 0 && updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
        dashboardData = deepClone(DashboardResponse);
      }
    }
  };

  req.on('close', cleanup);
  res.on('error', cleanup);
});

// Improved shutdown handling
const gracefulShutdown = () => {
  if (updateInterval) {
    clearInterval(updateInterval);
    updateInterval = null;
  }
  activeConnections.forEach((res, userId) => {
    if (!res.writableEnded) {
      res.end('server shutdown\n');
    }
  });
  server.close();
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// 3002 SSE for now since backend is 3001
server.listen(3002, () => {
  console.log('SSE server running on port 3002');
});

