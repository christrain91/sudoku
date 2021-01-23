import { NextAnswer, Puzzle } from '../definitions'
import getPossibleValuesForPosition from './getPossibleValuesForPosition'

export default function solveNext(puzzle: Puzzle): NextAnswer | null {
  let next: NextAnswer | null = null

  puzzle.forEach((box, boxIndex) => {
    return box.map((cellValue, cellIndex) => {
      if (cellValue !== null) return

      const possibleValues = getPossibleValuesForPosition(
        { boxIndex, cellIndex },
        puzzle
      )

      if (possibleValues.length === 0) {
        console.log('PUZZLE: ', puzzle)
        console.log('AT POSITION: ', boxIndex, cellIndex)
        throw new Error('Can not solve puzzle, mistakes have been made')
      }

      if (!next || possibleValues.length < next.possibleValues.length) {
        next = { boxIndex, cellIndex, possibleValues }
      }
    })
  })

  return next
}
