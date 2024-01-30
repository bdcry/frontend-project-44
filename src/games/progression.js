import { getRandomNumber, runGame } from '../utils/utils.js';

// Создаем арифметическую прогрессию
const generateProgression = (start, step, length, hiddenNumberIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenNumberIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }
  return progression.join(' ');
};

const gameRules = 'What number is missing in the progression?';

const playProgressionGame = () => {
  const getQuestionAndAnswer = () => {
    const progressionStart = getRandomNumber(10) + 1; // Начальное число прогрессии
    const progressionStep = getRandomNumber(5) + 1; // Шаг прогрессии
    const progressionLength = getRandomNumber(6) + 5; // Длина прогрессии
    const hiddenNumberIndex = getRandomNumber(progressionLength); // Индекс скрытого числа
    const correctAnswer = String(progressionStart + hiddenNumberIndex * progressionStep);
    const question = generateProgression(
      progressionStart,
      progressionStep,
      progressionLength,
      hiddenNumberIndex,
    );

    return { question: `${question}`, answer: correctAnswer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playProgressionGame;
