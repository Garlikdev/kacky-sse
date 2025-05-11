type TServerMap = {
  number: number;
  author: string;
  finished: boolean;
};

type TServer = {
  serverNumber: number;
  serverDifficulty: "Easy" | "Medium" | "Hard";
  maps: TServerMap[];
  timeLimit: number;
  timeLeft: number;
};

type TDashboardResponse = {
  players: number;
  serverCount: number;
  mapCount: number;
  difficulties: { easy: number; medium: number; hard: number };
  servers: TServer[];
  competitionTimeLeft: number;
};

type TDashboardUserData = {
  eventRank: number;
  kackyRank: number;
  worldRecords: number;
  worldRecordsRank: number;
  playtime: number;
  totalPlaytime: number;
  mapProgress: number[];
  mapNext: number[];
};

type TSSEData<T> = {
  global: TDashboardResponse;
  user?: TDashboardUserData;
};
