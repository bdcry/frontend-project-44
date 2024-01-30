import { getRandomNumber, runGame } from '../utils/utils.js';

// Ищем НОД
const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const gameRules = 'Find the greatest common divisor of given numbers.';

const playGCDGame = () => {
  const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber(100);
    const num2 = getRandomNumber(100);

    const question = `${num1} ${num2}`;

    // Результат этой операции преобразуется в строку с помощью функции String(),
    // так как ответ пользователя, который будет сравниваться с этим результатом,
    // равен строковому значению, то есть String
    const answer = String(findGCD(num1, num2));

    // Показываем вопрос и проверяем ответ пользователя
    return { question, answer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playGCDGame;
