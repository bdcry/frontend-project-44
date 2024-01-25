import readlineSync from 'readline-sync';
import greet from '../utils/cli.js';
import {
    findGCD,
    roundsCount,
    getRandomNumber,
    congratulateUser,
    checkAnswer,
} from '../utils/utils.js';

const playGCDGame = () => {
    const userName = greet();
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < roundsCount; i += 1) {
        const num1 = getRandomNumber(100);
        const num2 = getRandomNumber(100);

        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = findGCD(num1, num2);

        if (!checkAnswer(userAnswer, correctAnswer, userName, true)) {
            return;
        }
    }
    congratulateUser(userName);
};

export default playGCDGame;
