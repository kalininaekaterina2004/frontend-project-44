#!/usr/bin/env node

import runEngine from '../index.js';
import getRandomInRange from '../math.js';

export const pass = (str) => {
  const prog = str.split(' ');
  const indOfHidden = prog.indexOf('..');
  let result = 0;
  const firstTwo = [parseInt(prog[0], 10), parseInt(prog[1], 10)];
  const lastTwo = [parseInt(prog[prog.length - 3], 10), parseInt(prog[prog.length - 2], 10)];
  if (indOfHidden > 1) {
    result = firstTwo[0] + ((firstTwo[1] - firstTwo[0]) * indOfHidden);
  } else {
    result = lastTwo[1] - ((lastTwo[1] - lastTwo[0]) * (prog.length - indOfHidden - 2));
  }
  return `${result}`;
};

export const isProgressing = (n, a) => {
  const d = getRandomInRange(1, 30);
  const hidden = getRandomInRange(1, n - 1);
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += (hidden === i) ? '.. ' : `${a + d * i} `;
  }
  return result;
};

const progression = () => {
  const rules = 'What number is missing in the progression?';
  const generateRound = () => {
    const n = getRandomInRange(5, 10);
    const a = getRandomInRange(2, 25);
    const ex = isProgressing(n, a);
    const correctProgressing = pass(ex);
    return [ex, correctProgressing];
  };
  runEngine(rules, generateRound);
};

export default progression;
