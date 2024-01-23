import readlineSync from 'readline-sync';
import greet from '../cli.js';

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

const playCalcGame = () => {
    const userName = greet();
    console.log('What is the result of the expression?');

    // Проходим три раунда игры
    const roundsCount = 3;

    // Создаем операторы
    const operations = ['+', '-', '*'];

    for (let i = 0; i < roundsCount; i += 1) {
        // Рандомное целое число от 0 до 99
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const operation = operations[i];
        console.log(`Question: ${num1} ${operation} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = calculate(num1, num2, operation);

        // Используем ParseInt, тк входные данные - string
        if (parseInt(userAnswer, 10) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

export default playCalcGame;
