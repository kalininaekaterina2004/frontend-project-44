#!/usr/bin/env node

import welcome from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import getRandomInRange from '../math.js';

const progress = (a, d) => {
  let result = '';
  const length = getRandomInRange(5, 10);
  const desired = getRandomInRange(1, length - 2);
  for (let i = 0; i < length; i += 1) {
    const formula = (a + (d * i));
    result += (i !== desired) ? `${formula} ` : '.. ';
  }
  return result;
};

const letprogress = (str) => {
  const sort = str.split(' ');
  const indexSearch = sort.indexOf('..');
  const prevNumber = parseInt(sort[indexSearch - 1], 10);
  const nextNumber = parseInt(sort[indexSearch + 1], 10);
  const solve = (prevNumber + nextNumber) / 2;
  return `${solve}`;
};
const progression = () => {
  const userName = welcome('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const a = getRandomInRange();
    const d = getRandomInRange(2, 8);
    const prog = progress(a, d);
    const userAnswer = answerForm(prog, 'string');
    const correctAnswer = letprogress(prog);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default progression;
