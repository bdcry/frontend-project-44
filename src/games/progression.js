import readlineSync from 'readline-sync';
import greet from '../cli.js';

// Создаем Арифметичекую прогрессию
const generateProgression = (start, step, length, hiddenNumberIndex) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        if (i === hiddenNumberIndex) {
            progression.push('...');
        } else {
            progression.push(start + i * step);
        }
    }
    return progression.join(' ');
};

const playProgressionGame = () => {
    const userName = greet();
    console.log('What number is missing in the progression?');

    // Проходим три раунда игры
    const roundsCount = 3;

    for (let i = 0; i < roundsCount; i += 1) {
        const progressionStart = Math.floor(Math.random() * 10) + 1; // Начальное число прогрессии
        const progressionStep = Math.floor(Math.random() * 5) + 1; // Шаг прогрессии
        const progressionLength = Math.floor(Math.random() * 6) + 5; // Длина прогрессии
        // Индекс скрытого числа
        const hiddenNumberIndex = Math.floor(Math.random() * progressionLength);
        const question = generateProgression(
            progressionStart,
            progressionStep,
            progressionLength,
            hiddenNumberIndex,
        );
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = progressionStart + hiddenNumberIndex * progressionStep;

        // Используем ParseInt, тк входные данные - string
        if (parseInt(userAnswer, 10) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

export default playProgressionGame;
