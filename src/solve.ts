
import { Puzzle, Coordinate, PuzzleNumber } from './definitions'
import display from './display'
import getValuesForPosition from './getValuesForPosition'


export default function solve(puzzle: Puzzle) {
  let finished = false
  let workingPuzzle: Puzzle = [...puzzle]
  while (!finished) {
    const result = solveNext(workingPuzzle)
    workingPuzzle = result.puzzle
    finished = isFinished(workingPuzzle)
    if (!result.next) {
      throw new Error('Can not solve')
    }
    console.log(`Found answer: ${result.next.value} at: [${[result.next.x + 1, result.next.y + 1]}]`)
    display(workingPuzzle, [result.next.x, result.next.y])
  }

  return workingPuzzle
}

interface NextAnswer  { 
  x: number
  y: number
  value: PuzzleNumber
  possibleValueCount: number 
}

export function solveNext (puzzle: Puzzle) : { puzzle: Puzzle, next: NextAnswer | null } {
  let workingPuzzle: Puzzle = [...puzzle]
  let next: NextAnswer | null = null

  workingPuzzle = workingPuzzle.map((row, yCoord) => {
    const workingRow = [...row]
    return workingRow.map((value, xCoord) => {
      if (value === null) {
        const possibleValues = getPossibleValuesForCoordinate([xCoord, yCoord], puzzle)
        if (possibleValues.length === 0) throw new Error('Can not solve puzzle, mistakes have been made')
        if (!next || possibleValues.length < next.possibleValueCount) {
          next = { x: xCoord, y: yCoord, value: possibleValues[0], possibleValueCount: possibleValues.length }
        }
      }
      return value
    }) 
  }) as Puzzle

  next = next as NextAnswer | null

  if (!next) {
    throw new Error('I really can not solve this one')
  }

  workingPuzzle[next.y][next.x] = next.value

  return { puzzle: workingPuzzle, next}
} 

function getPossibleValuesForCoordinate(coordinates: [Coordinate, Coordinate], puzzle: Puzzle) : PuzzleNumber[] {
  const possibles: PuzzleNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const values = getValuesForPosition(coordinates, puzzle)

  return possibles.filter(possible => {
    return !values.box.includes(possible) && !values.column.includes(possible) && !values.row.includes(possible)
  })
}

function isFinished (puzzle: Puzzle) : boolean {
  let nullCount = 0

  puzzle.forEach(row => nullCount += row.filter(value => value === null).length)

  console.log('Remaining: ', nullCount)
  return nullCount === 0
}



