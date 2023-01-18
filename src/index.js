import readLineSync from 'readline-sync';

export const type = (str) => {
  console.log(str);
};

export const answerForm = (variable, dataType) => {
  const result = readLineSync.question(`Question: ${variable} \nYour answer: `);
  if (dataType === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkAnswer = (userAnswer, correctAnswer, userName, i) => {
  if (userAnswer === correctAnswer) {
    type('Correct!');
  } else {
    type(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    return false;
  }
  if (i === 2) type(`Congratulations, ${userName}!`);
  return true;
};
