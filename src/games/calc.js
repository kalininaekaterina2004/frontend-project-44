#!/usr/bin/env node

import runEngine from '../index.js';
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
  const rules = 'What is the result of the expression?';
  const generateRound = () => {
    const oper = getOperator(['+', '-', '*']);
    const x = getRandomInRange(1, 20);
    const y = getRandomInRange(1, 20);
    const primer = `${x} ${oper} ${y}`;
    const correctCalc = calculator(x, y, oper);
    return [primer, correctCalc.toString()];
  };
  runEngine(rules, generateRound);
};

export default calc;
