// utils.js

// Задаем количество раундов
export const roundsCount = 3;

// Задаем правила
const gameRules = {
    calc: 'What is the result of the expression?',
    even: 'Answer "yes" if the number is even, otherwise answer "no".',
    gcd: 'Find the greatest common divisor of given numbers.',
    prime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    progression: 'What number is missing in the progression?',
};

export const showGameRules = (gameType) => {
    console.log(gameRules[gameType]);
};

// Проверяем правильность ответа
export const checkAnswer = (userAnswer, correctAnswer, userName, isNumeric = false) => {
    const parsedUserAnswer = isNumeric ? parseInt(userAnswer, 10) : userAnswer;
    if (parsedUserAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}`);
        return false;
    }
    console.log('Correct!');
    return true;
};

// Поздравялем пользователя с успешным прохождение игры
export const congratulateUser = (userName) => {
    console.log(`Congratulations, ${userName}!`);
};

// Генерируем сулчайное число
export const getRandomNumber = (max) => Math.floor(Math.random() * max);

// Проверяем, четное ли число
export const isEven = (num) => num % 2 === 0;

// Логика калькулятора
export const calculate = (num1, num2, operation) => {
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

// Ищем НОД
export const findGCD = (a, b) => {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
};

// Проверяем, является ли число простым
export const isPrime = (num) => {
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

// Создаем арифметическую прогрессию
export const generateProgression = (start, step, length, hiddenNumberIndex) => {
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
