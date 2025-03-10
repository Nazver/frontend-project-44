#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { checkAnswer, isEven, randomNumber } from '../src/cli.js';

export default function game(name) {
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const randNumber = randomNumber();
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correct = isEven(randNumber);

    if (checkAnswer(answer, correct, name)) {
      count += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

game(welcome());
