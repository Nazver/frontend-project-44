import readlineSync from 'readline-sync'
import welcome, { randomNumber } from "../src/cli.js";
const xd = (random1, random2, random3) => {
    let result = 0
    if (random3 == '+') {
      result = random1 + random2
    }
    else if (random3 == '-') {
      result = random1 - random2
    }
    else if (random3 == '*') {
      result = random1 * random2
    }
    return result
  }

export const game = (name) => {
    const operations = ['+', '-', '*']
    let count = 0
    while (count < 3) {
      console.log('What is the result of the expression?')
      let random1 = randomNumber()
      let random2 = randomNumber()
      let random3 = operations[randomNumber(0, operations.length - 1)]
      let correct = xd(random1, random2, random3)
      console.log(`Question: ${random1} ${random3} ${random2}`)
      const answer = readlineSync.question('Your answer: ')
  
      if (Number(correct) === Number(answer)) {
        console.log('Correct')
        count++
      }
      else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
        )
        console.log(`Let's try again, ${name}`)
        return
      }
      console.log(`Congratulations, ${name}`)
    };
  }
  
  game(welcome())