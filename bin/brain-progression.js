#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { checkAnswer, randomNumber } from '../src/cli.js';

export default function gameProgression(name) {
  console.log('What number is missing in the progression?');

  let counter = 0;

  while (counter < 3) {
    const length = randomNumber(5, 10);
    const start = randomNumber(1, 10);
    const step = randomNumber(1, 10);
    const progression = [];

    for (let i = 0; i < length; i += 1) {
      progression.push(start + step * i);
    }

    const random1 = randomNumber(0, progression.length - 1);
    const correct = String(progression[random1]);
    progression[random1] = '..';

    console.log(`Question: ${progression.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    if (checkAnswer(answer, correct, name)) {
      counter += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
gameProgression(welcome());
