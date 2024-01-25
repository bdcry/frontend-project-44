import readlineSync from 'readline-sync';
import greet from '../utils/cli.js';
import {
    generateProgression,
    roundsCount,
    getRandomNumber,
    checkAnswer,
    congratulateUser,
    showGameRules,
} from '../utils/utils.js';

const playProgressionGame = () => {
    const userName = greet();
    showGameRules('progression');

    for (let i = 0; i < roundsCount; i += 1) {
        const progressionStart = getRandomNumber(10) + 1; // Начальное число прогрессии
        const progressionStep = getRandomNumber(5) + 1; // Шаг прогрессии
        const progressionLength = getRandomNumber(6) + 5; // Длина прогрессии
        const hiddenNumberIndex = getRandomNumber(progressionLength); // Индекс скрытого числа
        const question = generateProgression(
            progressionStart,
            progressionStep,
            progressionLength,
            hiddenNumberIndex,
        );
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = progressionStart + hiddenNumberIndex * progressionStep;

        if (!checkAnswer(userAnswer, correctAnswer, userName, true)) {
            return;
        }
    }
    congratulateUser(userName);
};

export default playProgressionGame;
