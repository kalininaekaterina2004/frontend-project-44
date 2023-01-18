#!/usr/bin/env node

import welcome from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { magicNumbers } from '../src/math.js';

const even = () => {
  const userName = welcome('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

even();
export default even;
