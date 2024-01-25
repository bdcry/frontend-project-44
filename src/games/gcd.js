import readlineSync from 'readline-sync';
import greet from '../cli.js';

// Находим НОД через рекурсию и метод Евклида
const findGCD = (a, b) => {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
};

const playGCDGame = () => {
    const userName = greet();
    console.log('Find the greatest common divisor of given numbers.');

    // Проходим три раунда игры
    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
        // Рандомное целое число от 0 до 99
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);

        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = findGCD(num1, num2);

        // Используем ParseInt, тк входные данные - string
        if (parseInt(userAnswer, 10) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

export default playGCDGame;
