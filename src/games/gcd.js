#!/usr/bin/env node

import welcome from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { getRandomInRange } from '../math.js';

const getDivisor = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};

const gcd = () => {
  const userName = welcome('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const x = getRandomInRange();
    const y = getRandomInRange();
    const ex = `${x} ${y}`;
    const userAnswer = answerForm(ex);
    const correctAnswer = getDivisor(x, y);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default gcd;
