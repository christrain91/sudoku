import { cloneDeep, times } from 'lodash'
import { Puzzle, Position, Index } from '../definitions'
import solve from './solve'

export default function generate(): Puzzle {
  return generateCompletePuzzle()
}

function generateCompletePuzzle(): Puzzle {
  const { puzzle } = solve(generateEmptyBoard())
  return removePiecesFromPuzzle(puzzle)
}

function generateEmptyBoard(): Puzzle {
  return times(9, () => times(9, () => null)) as Puzzle
}

function removePiecesFromPuzzle(puzzle: Puzzle): Puzzle {
  const piecesToRemove = 70 - getRandom(30)
  const workingPuzzle = cloneDeep(puzzle)

  times(piecesToRemove, () => {
    const positions = getPositionsWithValue(workingPuzzle)
    const removeAtPosition = getRandomFromValues(positions)
    if (removeAtPosition) {
      workingPuzzle[removeAtPosition.boxIndex][
        removeAtPosition.cellIndex
      ] = null
    }
  })

  return workingPuzzle
}

function getPositionsWithValue(puzzle: Puzzle): Position[] {
  const positions: Position[] = []
  puzzle.forEach((box, boxIndex) => {
    box.forEach((cell, cellIndex) => {
      if (cell !== null) {
        positions.push({
          cellIndex: cellIndex as Index,
          boxIndex: boxIndex as Index
        })
      }
    })
  })

  return positions
}

function getRandomFromValues<T>(values: T[]): T {
  return values[getRandom(values.length - 1)]
}

function getRandomIndex(): number {
  return getRandom(9)
}

function getRandom(max: number): number {
  return Math.floor(Math.random() * max)
}
