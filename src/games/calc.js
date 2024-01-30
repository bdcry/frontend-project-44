import { getRandomNumber, runGame } from '../utils/utils.js';

// Логика калькулятора
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Something went wrong. Try again, bro';
  }
};

const gameRules = 'What is the result of the expression?';

const playCalcGame = () => {
  const getQuestionAndAnswer = () => {
    // Создаем операторы
    const operations = ['+', '-', '*'];

    const num1 = getRandomNumber(10);
    const num2 = getRandomNumber(10);

    // Генерируем случайный оператор
    const operation = operations[getRandomNumber(operations.length)];
    const question = `${num1} ${operation} ${num2}`;

    // Результат этой операции преобразуется в строку с помощью функции String(),
    // так как ответ пользователя, который будет сравниваться с этим результатом,
    // равен строковому значению, то есть String
    const answer = String(calculate(num1, num2, operation));

    // Показываем вопрос и проверяем ответ пользователя
    return { question, answer };
  };

  runGame(gameRules, getQuestionAndAnswer);
};

export default playCalcGame;
