import readlineSync from 'readline-sync';
import greet from '../cli.js';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
    const userName = greet();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    // Проходим три раунда игры
    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
        // Рандомное целое число от 0 до 99
        const question = Math.floor(Math.random() * 100);
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(question) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
