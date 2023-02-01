#!/usr/bin/env node
import welcome from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { magicNumbers } from '../src/math.js';

const prime = () => {
  const userName = welcome('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const random = magicNumbers(1, 1368);
    const b = magicNumbers();
    const c = b !== random;
    const example = `${random}`;
    const userAnswer = answerForm(example, 'string');
    const correctAnswer = random % 2 === 0 && random % c === 0 ? 'no' : 'yes';

    if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
  }
};
prime();
export default prime;
