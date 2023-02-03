#!/usr/bin/env node

import welcome from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { magicNumbers, progress, letprogress } from '../math.js';

const progression = () => {
  const userName = welcome('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const a = magicNumbers();
    const d = magicNumbers(2, 8);
    const prog = progress(a, d);
    const userAnswer = answerForm(prog, 'string');
    const correctAnswer = letprogress(prog);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default progression;
