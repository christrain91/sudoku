import { Coordinate, Puzzle } from './definitions'
import chalk from 'chalk'

export default function display (puzzle: Puzzle, highlightCoords?: [Coordinate, Coordinate]) : void {
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
      const displayFn = highlightCoords && highlightCoords[0] === x && highlightCoords[1] === y ? chalk.greenBright : (value: any) => value 
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