import { Puzzle, Coordinate, PuzzleNumber } from './definitions'
import display from './display'
import getValuesForPosition from './getValuesForPosition'
import { cloneDeep } from 'lodash'

export default function solve(
  puzzle: Puzzle
): { success: boolean; puzzle: Puzzle } {
  let finished = false
  let workingPuzzle: Puzzle = cloneDeep(puzzle)

  while (!finished) {
    finished = isFinished(workingPuzzle)

    if (finished) {
      break
    }

    const next = solveNext(workingPuzzle)

    if (!next) {
      break
    }

    if (next.possibleValues.length === 1) {
      const response = applyNextSolution(
        workingPuzzle,
        [next.x, next.y],
        next.possibleValues[0]
      )

      workingPuzzle = response
    } else {
      for (let possibleValue of next.possibleValues) {
        const workingPermutationPuzzle = applyNextSolution(
          workingPuzzle,
          [next.x, next.y],
          possibleValue
        )

        const permutationResult = solve(workingPermutationPuzzle)
        if (permutationResult.success) {
          finished = true
          workingPuzzle = permutationResult.puzzle
          break
        }
      }

      if (!finished) {
        throw new Error('Failed to solve this puzzle.')
      }
    }
  }

  return { success: finished, puzzle: workingPuzzle }
}

interface NextAnswer {
  x: number
  y: number
  possibleValues: PuzzleNumber[]
}

function solveNext(puzzle: Puzzle): NextAnswer | null {
  let next: NextAnswer | null = null

  puzzle.forEach((row, yCoord) => {
    return row.map((value, xCoord) => {
      if (value !== null) return

      const possibleValues = getPossibleValuesForCoordinate(
        [xCoord, yCoord],
        puzzle
      )

      if (possibleValues.length === 0)
        throw new Error('Can not solve puzzle, mistakes have been made')
      if (!next || possibleValues.length < next.possibleValues.length) {
        next = { x: xCoord, y: yCoord, possibleValues }
      }
    })
  })

  return next
}

function applyNextSolution(
  puzzle: Puzzle,
  coordinates: [Coordinate, Coordinate],
  value: PuzzleNumber
): Puzzle {
  let workingPuzzle = [...puzzle]
  puzzle[coordinates[1]][coordinates[0]] = value

  console.log(
    `\r\nFound answer for [${[
      coordinates[1] + 1,
      coordinates[0] + 1
    ]}] value is: ${value}\r\n`
  )

  display(puzzle, [coordinates[1], coordinates[0]])

  return puzzle
}

function getPossibleValuesForCoordinate(
  coordinates: [Coordinate, Coordinate],
  puzzle: Puzzle
): PuzzleNumber[] {
  const possibles: PuzzleNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const values = getValuesForPosition(coordinates, puzzle)

  return possibles.filter((possible) => {
    return (
      !values.box.includes(possible) &&
      !values.column.includes(possible) &&
      !values.row.includes(possible)
    )
  })
}

function isFinished(puzzle: Puzzle): boolean {
  let nullCount = 0

  puzzle.forEach(
    (row) => (nullCount += row.filter((value) => value === null).length)
  )

  return nullCount === 0
}
