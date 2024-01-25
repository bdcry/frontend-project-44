import readlineSync from 'readline-sync';
import greet from '../cli.js';

// Проверяем, является ли число простым
const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const playPrimeGame = () => {
    const userName = greet();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    // Проходим три раунда игры
    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
        // Рандомное целое число от 0 до 99
        const question = Math.floor(Math.random() * 100);
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isPrime(question) ? 'yes' : 'no';
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame;
