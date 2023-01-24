import welcome from "../src/cli.js";
import { answerForm, checkAnswer } from "../src/index.js";
import { magicNumbers, progress } from "../src/math.js";

const progression = () => {
    const userName = welcome('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const n = magicNumbers();
        const a = magicNumbers(1, 15);
        const prog = progress(a, d);
        const userAnswer = answerForm(prog, 'string');
        const correctAnswer = 
        if (!checkAnswer(userAnswer, correctAnswer, userName, i)) break;
    }
};
progression();
export default progression;