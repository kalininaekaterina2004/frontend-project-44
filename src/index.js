import readLineSync from 'readline-sync';

export const answerForm = (variable, dataType) => {
  const result = readLineSync.question(`Question: ${variable} \nYour answer: `);
  if (dataType === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkAnswer = (userAnswer, correctAnswer, userName, i) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    return false;
  }
  if (i === 2) console.log(`Congratulations, ${userName}!`);
  return true;
};
