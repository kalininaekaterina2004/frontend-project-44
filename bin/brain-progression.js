#!/usr/bin/env node

import welcome from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { magicNumbers, progress, letprogress } from '../src/math.js';

const progression = () => {
  const userName = welcome('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const a = magicNumbers();
    const d = magicNumbers(1, 10);
    const prog = progress(a, d);
    const userAnswer = answerForm(prog, 'string');
    const correctAnswer = letprogress(prog);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

progression();
export default progression;
