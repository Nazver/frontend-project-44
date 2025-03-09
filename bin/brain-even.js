#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { isEven, randomNumber } from '../src/cli.js';

export default function game(name) {
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const randNumber = randomNumber();
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correct = isEven(randNumber);

    if (correct === answer) {
      console.log('Correct');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

game(welcome());
