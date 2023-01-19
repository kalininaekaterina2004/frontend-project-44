#!/usr/bin/env node

import welcome from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { magicNumbers, getDivisor } from '../src/math.js';

const gcd = () => {
  const userName = welcome('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const x = magicNumbers();
    const y = magicNumbers();
    const ex = `${x} ${y}`;
    const userAnswer = answerForm(ex);
    const correctAnswer = getDivisor(x, y);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};
gcd();
export default gcd;
