import readlineSync from 'readline-sync'

export default function welcome  (description)  {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    if (description !== undefined) {
      console.log(description);
    }
    return name;
  };
  export const isEven = (num) => num % 2 === 0 ? 'yes' : 'no'
  
  export const randomNumber = (min = 1, max = 100) => {
    const range = max - min + 1
    return Math.floor(Math.random() * range) + min
  }