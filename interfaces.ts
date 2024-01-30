export interface Question {
  id: number;
  question: string;
  answer: string;
  options?: string[];
}

export interface QuestionCategory {
  category: string;
  start: number;
  end: number;
}
