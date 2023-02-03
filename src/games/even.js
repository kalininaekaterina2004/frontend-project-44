#!/usr/bin/env node

import welcome from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { magicNumbers } from '../math.js';

const even = () => {
  const userName = welcome('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default even;