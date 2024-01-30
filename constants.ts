import { Question, QuestionCategory } from "./interfaces";

export const cardData = [
  {
    title: "Solve the below equation and find the missing number",
    description: "Card description",
    card: "Math1",
  },
  {
    title: "Solve the below equation and find the missing number",
    description: "Card description",
    card: "Math2",
  },
  {
    title: "Solve the below equation and find the missing number",
    description: "Card description",
    card: "Math3",
  },
  {
    title: "Solve the below puzzle and find the missing number",
    description: "Card description",
    card: "Puzzle1",
  },
  {
    title: "Solve the below puzzle and find the missing number",
    description: "Card description",
    card: "Puzzle2",
  },
  {
    title: "Solve the below captcha and find the missing part of your password",
    description: "Card description",
    card: "Captcha1",
  },
  {
    title:
      "Solve the below equation and find the missing part of your password",
    description: "Card description",
    card: "Captcha2",
  },
  {
    title: "Solve the below equation and find the missing number",
    description: "Card description",
    card: "Math4",
  },
  {
    title: "Solve the below equation and find the missing number",
    description: "Card description",
    card: "Math5",
  },
  {
    title: "Solve the below equation and find the missing number",
    description: "Card description",
    card: "Math6",
  },
];

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of India?",
    answer: "Delhi",
  },
  {
    id: 2,
    question: "Say my name",
    answer: "Heisenberg",
  },
];

export const questionCategory: QuestionCategory[] = [
  {
    category: "Math",
    start: 1,
    end: 100,
  },
  {
    category: "GI",
    start: 101,
    end: 200,
  },
];
