#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { checkAnswer, randomNumber, prime } from '../src/cli.js';

export default function gamePrime(name) {
  let count = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (count < 3) {
    const random1 = randomNumber(1, 100);
    const correct = String(prime(random1));
    console.log(`Question: ${random1}`);
    const answer = readlineSync.question('Your answer: ');

    if (checkAnswer(answer, correct, name)) {
      count += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

gamePrime(welcome());
