import readlineSync from 'readline-sync';
import greet from '../utils/cli.js';
import {
    getRandomNumber,
    calculate,
    checkAnswer,
    roundsCount,
    congratulateUser,
    showGameRules,
} from '../utils/utils.js';

const playCalcGame = () => {
    const userName = greet();
    showGameRules('calc');

    // Создаем операторы
    const operations = ['+', '-', '*'];

    for (let i = 0; i < roundsCount; i += 1) {
        const num1 = getRandomNumber(10);
        const num2 = getRandomNumber(10);
        const operation = operations[i];
        console.log(`Question: ${num1} ${operation} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = calculate(num1, num2, operation);

        if (!checkAnswer(userAnswer, correctAnswer, userName, true)) {
            return;
        }
    }
    congratulateUser(userName);
};

export default playCalcGame;
