export interface QuestionCount {
  count: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

export interface BeatsPercentage {
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  percentage: number;
}

export const numAcceptedQuestions: QuestionCount[] = [
  { count: 167, difficulty: 'EASY' },
  { count: 199, difficulty: 'MEDIUM' },
  { count: 31, difficulty: 'HARD' },
];

export const numFailedQuestions: QuestionCount[] = [
  { count: 0, difficulty: 'EASY' },
  { count: 13, difficulty: 'MEDIUM' },
  { count: 3, difficulty: 'HARD' },
];

export const numUntouchedQuestions: QuestionCount[] = [
  { count: 765, difficulty: 'EASY' },
  { count: 1814, difficulty: 'MEDIUM' },
  { count: 881, difficulty: 'HARD' },
];

export const userSessionBeatsPercentage: BeatsPercentage[] = [
  { difficulty: 'EASY', percentage: 96.17 },
  { difficulty: 'MEDIUM', percentage: 93.74 },
  { difficulty: 'HARD', percentage: 85.28 },
];

export const totalQuestionBeatsPercentage = 98.5;
