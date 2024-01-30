import { questions } from "./constants";
import { Question } from "./interfaces";

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const easyStart = 1,
  easyEnd = 10,
  mediumStart = 11,
  mediumEnd = 20,
  hardStart = 21,
  hardEnd = 30,
  godStart = 31,
  godEnd = 50;

export function getRandomQuestionBasedOnLevel(level: number): Question {
  let num = getRandomNumber(1, 4);
  if (num == 1) {
    //num==1, it represents math
    if (level == 1) {
      let questionNum = getRandomNumber(easyStart, easyEnd);
      return questions[questionNum];
    } else if (level == 2) {
      let questionNum = getRandomNumber(mediumStart, mediumEnd);
      return questions[questionNum];
    } else if (level == 3) {
      let questionNum = getRandomNumber(hardStart, hardEnd);
      return questions[questionNum];
    } else {
      let questionNum = getRandomNumber(hardStart, hardEnd);
      return questions[questionNum];
    }
  } else if (num == 2) {
    //num==2, it represents GI
    if (level == 1) {
      //Adding 100 because medium questions are between [101,200];
      let questionNum = getRandomNumber(100 + easyStart, 100 + easyEnd);
      return questions[questionNum];
    } else if (level == 2) {
      let questionNum = getRandomNumber(100 + mediumStart, 100 + mediumEnd);
      return questions[questionNum];
    } else if (level == 3) {
      let questionNum = getRandomNumber(100 + hardStart, 100 + hardEnd);
      return questions[questionNum];
    } else {
      let questionNum = getRandomNumber(100 + hardStart, 100 + hardEnd);
      return questions[questionNum];
    }
  } else {
    //num==3, it represents dsa
    if (level == 1) {
      let questionNum = getRandomNumber(200 + easyStart, 200 + easyEnd);
      return questions[questionNum];
    } else if (level == 2) {
      let questionNum = getRandomNumber(200 + mediumStart, 200 + mediumEnd);
      return questions[questionNum];
    } else if (level == 3) {
      let questionNum = getRandomNumber(200 + hardStart, 200 + hardEnd);
      return questions[questionNum];
    } else {
      let questionNum = getRandomNumber(200 + hardStart, 200 + hardEnd);
      return questions[questionNum];
    }
  }
}
