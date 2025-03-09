#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { randomNumber } from '../src/cli.js';

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
    const correct = progression[random1];
    progression[random1] = '..';

    console.log(`Quesion: ${progression.join(' ')}`);

    const answer = readlineSync.question('Your answer: ');

    if (correct.toString() !== answer.toString()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }

    counter += 1;
    console.log('Correct');
  }

  console.log(`Congratulations, ${name}`);
}
gameProgression(welcome());
