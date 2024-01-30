import { getRandomNumber, runGame } from '../utils/utils.js';

// Проверяем, четное ли число
const isEven = (num) => num % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    // Показываем вопрос и проверяем ответ пользователя
    return { question: `Question: ${question}`, answer: correctAnswer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playEvenGame;
