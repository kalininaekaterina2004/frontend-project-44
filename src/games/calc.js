#!/usr/bin/env node

import welcome from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import getRandomInRange from '../math.js';

const calculator = (x, y, oper) => {
  let result = 0;
  if (oper === '+') result = x + y;
  if (oper === '-') result = x - y;
  if (oper === '*') result = x * y;
  return result;
};

const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};

const calc = () => {
  const userName = welcome('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const operator = getOperator(['+', '-', '*']);
    const x = getRandomInRange(1, 12);
    const y = getRandomInRange(1, 12);
    const example = `${x} ${operator} ${y}`;
    const userAnswer = answerForm(example);
    let correctAnswer = 0;
    switch (operator) {
      case '+':
        correctAnswer = calculator(x, y, '+');
        break;

      case '-':
        correctAnswer = calculator(x, y, '-');
        break;
      case '*':
        correctAnswer = calculator(x, y, '*');
        break;
      default:
    }
    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default calc;
