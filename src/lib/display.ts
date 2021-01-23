import { Position, Puzzle } from '../definitions'
import chalk from 'chalk'

export default function display(
  puzzle: Puzzle,
  highlightPosition?: Position
): void {
  let string = ''
  const rowBreaker = '|-----------------------------|'

  puzzle.forEach((row, y) => {
    if (y % 3 === 0) {
      string += `${rowBreaker}\r\n`
    }
    row.forEach((value, x) => {
      if (x % 3 === 0) {
        string += '|'
      }
      const displayFn =
        highlightPosition &&
        highlightPosition.boxIndex === x &&
        highlightPosition.cellIndex === y
          ? chalk.greenBright
          : (value: any) => value
      string += ` ${displayFn(value || ' ')} `
      if (x === 8) {
        string += '|'
      }
    })

    if (y === 8) {
      string += `\r\n${rowBreaker}`
    } else {
      string += '\r\n'
    }
  })

  console.log(string)
}
