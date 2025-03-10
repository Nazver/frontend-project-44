#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { checkAnswer, randomNumber } from '../src/cli.js';

const calculate = (num1, num2, sign) => {
  const getAnswer = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
  };

  return getAnswer[sign];
};

export default function game(name) {
  const operations = ['+', '-', '*'];
  let count = 0;
  console.log('What is the result of the expression?');
  while (count < 3) {
    const random1 = randomNumber(1, 10);
    const random2 = randomNumber(1, 10);
    const random3 = operations[randomNumber(0, operations.length - 1)];
    const correct = calculate(random1, random2, random3);
    console.log(`Question: ${random1} ${random3} ${random2}`);
    const answer = readlineSync.question('Your answer: ');

    if (checkAnswer(Number(answer), correct, name)) {
      count += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

game(welcome());
