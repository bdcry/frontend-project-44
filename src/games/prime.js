import { getRandomNumber, runGame } from '../utils/utils.js';

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

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    // Показываем вопрос и проверяем ответ пользователя
    return { question: `${question}`, answer: correctAnswer };
  };
  runGame(gameRules, getQuestionAndAnswer);
};

export default playPrimeGame;
