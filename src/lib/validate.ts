import { Puzzle } from '../definitions'
import assert from 'assert'

export default function validate (puzzle: Puzzle) : puzzle is Puzzle {
  assert(puzzle.length === 9, 'Invalid number of rows')
  puzzle.forEach(puzzleRow => {
    assert.strictEqual(puzzleRow.length, 9, 'Invalid puzzle row size')
    puzzleRow.forEach(puzzleValue => {
      assert.strictEqual(puzzleValue === null || typeof puzzleValue === 'number' && puzzleValue >= 1 && puzzleValue <= 9, true, 'Invalid value detected')
    })
  })

  return true
}