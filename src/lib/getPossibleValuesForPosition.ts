import { Position, Puzzle, PuzzleNumber } from '../definitions'
import getLinkedValuesForPosition from './getLinkedValuesForPosition'

export default function getPossibleValuesForPosition(
  position: Position,
  puzzle: Puzzle
): PuzzleNumber[] {
  const possibles: PuzzleNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const linkedValues = getLinkedValuesForPosition(position, puzzle)

  return possibles.filter((possible) => {
    return (
      !linkedValues.box.includes(possible) &&
      !linkedValues.column.includes(possible) &&
      !linkedValues.row.includes(possible)
    )
  })
}