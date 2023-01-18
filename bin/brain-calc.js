#!/usr/bin/env node

import welcome from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { calculator, magicNumbers, getOperator } from '../src/math.js';

const calc = () => {
  const userName = welcome('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const operator = getOperator(['+', '-', '*']);
    const x = magicNumbers(1, 12);
    const y = magicNumbers(1, 12);
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
calc();
export default calc;
