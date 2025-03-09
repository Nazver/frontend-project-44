#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { randomNumber, prime } from '../src/cli.js';

export default function gamePrime(name) {
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (count < 3) {
    const random1 = randomNumber(1, 100);
    const correct = prime(random1);
    console.log(`Question: ${random1}`);
    const answer = readlineSync.question('Your answer: ');
    if (correct === answer) {
      console.log('Correct');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
}

gamePrime(welcome());
