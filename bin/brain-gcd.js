#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNumber, gcd } from '../src/cli.js';
import welcome from './brain-games.js';

export default function gameGcd(name) {
  let count = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (count < 3) {
    const random1 = randomNumber(1, 100);
    const random2 = randomNumber(1, 100);
    const correct = Number(gcd(random1, random2));
    console.log(`Question: ${random1} ${random2}`);
    const answer = Number(readlineSync.question('Your answer: '));
    if (correct === answer) {
      console.log('Correct');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
}
gameGcd(welcome());
