#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { checkAnswer, randomNumber, gcd } from '../src/cli.js';

export default function gameGcd(name) {
  let count = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (count < 3) {
    const random1 = randomNumber(1, 10);
    const random2 = randomNumber(1, 10);
    const correct = String(gcd(random1, random2)); // correct приводится к строке
    console.log(`Question: ${random1} ${random2}`);
    const answer = readlineSync.question('Your answer: ');

    if (checkAnswer(answer, correct, name)) {
      count += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
gameGcd(welcome());
