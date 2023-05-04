#!/usr/bin/env node
import welcome from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import getRandomInRange from '../math.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const userName = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInRange(1, 100);
    const examplePrime = `${randomNumber}`;
    const userAnswer = answerForm(examplePrime, 'string');
    const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default prime;
