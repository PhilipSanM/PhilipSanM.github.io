export interface ContestEntry {
  attended: boolean;
  trendDirection: 'UP' | 'DOWN';
  problemsSolved: number;
  totalProblems: number;
  finishTimeInSeconds: number;
  rating: number;
  ranking: number;
  contest: {
    title: string;
    startTime: number; // Unix timestamp
  };
}

export interface ContestRanking {
  attendedContestsCount: number;
  rating: number;
  globalRanking: number;
  totalParticipants: number;
  topPercentage: number;
}

export const contestRanking: ContestRanking = {
  attendedContestsCount: 5,
  rating: 1515.759,
  globalRanking: 332941,
  totalParticipants: 850439,
  topPercentage: 39.61,
};

export const contestHistory: ContestEntry[] = [
  {
    attended: true,
    trendDirection: 'DOWN',
    problemsSolved: 2,
    totalProblems: 4,
    finishTimeInSeconds: 7441,
    rating: 1471.147,
    ranking: 14292,
    contest: { title: 'Weekly Contest 358', startTime: 1691893800 },
  },
  {
    attended: true,
    trendDirection: 'DOWN',
    problemsSolved: 1,
    totalProblems: 4,
    finishTimeInSeconds: 576,
    rating: 1440.165,
    ranking: 15444,
    contest: { title: 'Weekly Contest 366', startTime: 1696732200 },
  },
  {
    attended: true,
    trendDirection: 'UP',
    problemsSolved: 1,
    totalProblems: 4,
    finishTimeInSeconds: 180,
    rating: 1461.628,
    ranking: 9323,
    contest: { title: 'Weekly Contest 383', startTime: 1707013800 },
  },
  {
    attended: true,
    trendDirection: 'UP',
    problemsSolved: 2,
    totalProblems: 4,
    finishTimeInSeconds: 2619,
    rating: 1471.559,
    ranking: 15130,
    contest: { title: 'Biweekly Contest 136', startTime: 1722695400 },
  },
  {
    attended: true,
    trendDirection: 'UP',
    problemsSolved: 2,
    totalProblems: 4,
    finishTimeInSeconds: 2383,
    rating: 1515.759,
    ranking: 6714,
    contest: { title: 'Weekly Contest 409', startTime: 1722738600 },
  },
];
