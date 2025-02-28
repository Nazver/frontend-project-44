#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  const randomNumber = Math.floor(Math.random(10 - 1) * 10);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('answer');
  const correct = isEven(randomNumber);
  if (correct === answer) {
    console.log('Correct!');
  } else {
    console.log(
      '\'yes\' is wrong answer ;(. Correct answer was \'no\'.Let\'s try again,!',
    );
  }
};

game();
