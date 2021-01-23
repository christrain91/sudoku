import { Puzzle, Position, PuzzleNumber } from '../definitions'
import { cloneDeep } from 'lodash'

export default function applySingleAnswer(
  puzzle: Puzzle,
  position: Position,
  value: PuzzleNumber
): Puzzle {
  const workingPuzzle = cloneDeep(puzzle)
  workingPuzzle[position.boxIndex][position.cellIndex] = value

  return workingPuzzle
}
