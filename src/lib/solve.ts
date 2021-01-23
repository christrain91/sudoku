import { Puzzle } from '../definitions'
import { cloneDeep } from 'lodash'
import isFinished from './isFinished'
import solveNext from './solveNext'
import applySingleAnswer from './applySingleAnswer'

export default function solve(
  puzzle: Puzzle
): { success: boolean; puzzle: Puzzle } {
  let finished = false
  let workingPuzzle: Puzzle = cloneDeep(puzzle)

  try {
    while (!finished) {
      finished = isFinished(workingPuzzle)

      if (finished) {
        break
      }

      const next = solveNext(workingPuzzle)

      if (!next) {
        break
      }

      const { boxIndex, cellIndex, possibleValues } = next

      if (possibleValues.length === 1) {
        const response = applySingleAnswer(
          workingPuzzle,
          { boxIndex, cellIndex },
          possibleValues[0]
        )

        workingPuzzle = response
      } else {
        for (let possibleValue of next.possibleValues) {
          const workingPermutationPuzzle = applySingleAnswer(
            workingPuzzle,
            { boxIndex, cellIndex },
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
  } catch (err) {
    finished = false
  }

  return { success: finished, puzzle: workingPuzzle }
}
