import readlineSync from 'readline-sync';
import greet from '../utils/cli.js';
import {
    isPrime,
    roundsCount,
    checkAnswer,
    congratulateUser,
    getRandomNumber,
} from '../utils/utils.js';

const playPrimeGame = () => {
    const userName = greet();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < roundsCount; i += 1) {
        const question = getRandomNumber(100);

        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isPrime(question) ? 'yes' : 'no';

        if (!checkAnswer(userAnswer, correctAnswer, userName)) {
            return;
        }
    }
    congratulateUser(userName);
};

export default playPrimeGame;
