#!/usr/bin/env node
import welcome from '../cli.js';
import { answerForm, checkAnswer } from '../index.js';
import { magicNumbers, isPrime } from '../math.js';

const prime = () => {
  const userName = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers(1, 100);
    const examplePrime = `${randomNumber}`;
    const userAnswer = answerForm(examplePrime, 'string');
    const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};

export default prime;
