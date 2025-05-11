//Making this static for now 
export const getUserData = (userId: string): TDashboardUserData => ({
  eventRank: 45,
  kackyRank: 30,
  worldRecords: 5,
  worldRecordsRank: 12,
  playtime: 250,
  totalPlaytime: 1200,
  mapProgress: [300, 301, 302, 303, 304],
  mapNext: [305,306,307,308,309]
});

export const DashboardResponse: TDashboardResponse = {
  players: 69420,
  serverCount: 10,
  mapCount: 75,
  difficulties: { easy: 4, medium: 3, hard: 3 },
  competitionTimeLeft: 720150,
  servers: [
    {
      serverNumber: 1,
      serverDifficulty: "Easy",
      maps: [
        { number: 300, author: "Djinn", finished: true },
        { number: 301, author: "Yekky", finished: false },
        { number: 302, author: "Simo", finished: false },
        { number: 303, author: "Fred", finished: true },
      ],
      timeLimit: 300,
      timeLeft: Math.floor(Math.random() * 301),
    },
    {
      serverNumber: 2,
      serverDifficulty: "Easy",
      maps: [
        { number: 304, author: "MapMaster", finished: true },
        { number: 305, author: "TrackStar", finished: false },
        { number: 306, author: "SpeedDemon", finished: true },
        { number: 307, author: "CurveKing", finished: false },
      ],
      timeLimit: 300,
      timeLeft: Math.floor(Math.random() * 301),
    },
    {
      serverNumber: 3,
      serverDifficulty: "Easy",
      maps: [
        { number: 308, author: "SmoothOperator", finished: false },
        { number: 309, author: "CurveCreator", finished: true },
        { number: 310, author: "TrackTwister", finished: false },
        { number: 311, author: "SpeedStar", finished: true },
      ],
      timeLimit: 300,
      timeLeft: Math.floor(Math.random() * 301),
    },
    {
      serverNumber: 4,
      serverDifficulty: "Easy",
      maps: [
        { number: 312, author: "Kekky", finished: true },
        { number: 313, author: "Johnny6", finished: true },
        { number: 314, author: "PogChamp69", finished: false },
        { number: 315, author: "Lady_Jeepers", finished: false },
      ],
      timeLimit: 300,
      timeLeft: Math.floor(Math.random() * 301),
    },
    {
      serverNumber: 5,
      serverDifficulty: "Medium",
      maps: [
        { number: 316, author: "Trollo_bollo", finished: false },
        { number: 317, author: "Tester3", finished: false },
        { number: 318, author: "Lolex", finished: true },
        { number: 319, author: "Yomama", finished: false },
      ],
      timeLimit: 600,
      timeLeft: 0, // Restarting state
    },
    {
      serverNumber: 6,
      serverDifficulty: "Medium",
      maps: [
        { number: 320, author: "LoopMaster", finished: false },
        { number: 321, author: "DriftQueen", finished: true },
        { number: 322, author: "JumpKing", finished: false },
        { number: 323, author: "BoostGod", finished: true },
      ],
      timeLimit: 600,
      timeLeft: Math.floor(Math.random() * 601),
    },
    {
      serverNumber: 7,
      serverDifficulty: "Medium",
      maps: [
        { number: 324, author: "TechWizard", finished: false },
        { number: 325, author: "GravityDefier", finished: true },
        { number: 326, author: "PixelPerfect", finished: false },
        { number: 327, author: "SpeedrunGuru", finished: true },
      ],
      timeLimit: 600,
      timeLeft: Math.floor(Math.random() * 601),
    },
    {
      serverNumber: 8,
      serverDifficulty: "Hard",
      maps: [
        { number: 328, author: "LoopLord", finished: true },
        { number: 329, author: "DriftKing", finished: false },
        { number: 330, author: "JumpMaster", finished: true },
        { number: 331, author: "BoostQueen", finished: false },
      ],
      timeLimit: 1200,
      timeLeft: Math.floor(Math.random() * 1201),
    },
    {
      serverNumber: 9,
      serverDifficulty: "Hard",
      maps: [
        { number: 332, author: "TechGenius", finished: true },
        { number: 333, author: "GravityMaster", finished: false },
        { number: 334, author: "PixelPro", finished: true },
        { number: 335, author: "SpeedrunLegend", finished: false },
      ],
      timeLimit: 1200,
      timeLeft: Math.floor(Math.random() * 1201),
    },
    {
      serverNumber: 10,
      serverDifficulty: "Hard",
      maps: [
        { number: 336, author: "TrackTitan", finished: false },
        { number: 337, author: "CurveCrafter", finished: true },
        { number: 338, author: "SpeedSage", finished: false },
        { number: 339, author: "DriftDiva", finished: true },
      ],
      timeLimit: 1200,
      timeLeft: Math.floor(Math.random() * 1201),
    },
  ],
};
