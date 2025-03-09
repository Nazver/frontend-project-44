#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome, { randomNumber } from '../src/cli.js';

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

    if (Number(correct) === Number(answer)) {
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

game(welcome());
