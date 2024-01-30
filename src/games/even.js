import readlineSync from 'readline-sync';
import greet from '../utils/cli.js';
import {
  getRandomNumber,
  isEven,
  roundsCount,
  checkAnswer,
  congratulateUser,
} from '../utils/utils.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenGame = () => {
  const userName = greet();
  console.log(gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const question = getRandomNumber(100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return;
    }
  }
  congratulateUser(userName);
};

export default playEvenGame;
