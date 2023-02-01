#!/usr/bin/env node
import welcome from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { magicNumbers, isPrime } from '../src/math.js';

const prime = () => {
  const userName = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = isPrime(randomNumber);

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};
prime();
export default prime;
