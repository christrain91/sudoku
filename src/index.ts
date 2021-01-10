import { Puzzle } from './definitions'
import validate from './validate'
import solve from './solve'
import display from './display'

const beginnerPuzzle: Puzzle = [
  [null, null, 3, null, null, null, 5, 2, null],
  [5, null, 9, 6, null, null, null, null, 8],
  [null, null, null, null, null, null, null, 9, null],
  [6, null, 7, 9, null, 1, null, null, 5],
  [9, null, 5, 8, null, 3, null, 4, null],
  [8, 3, 2, null, null, 7, 9, null, null],
  [null, 8, null, null, null, null, null, null, null],
  [null, null, 6, null, null, 8, null, 1, null],
  [null, null, null, 4, 5, 2, 8, 7, null]
]

const advancedPuzzle: Puzzle = [
  [3, null, null, 9, null, null, null, null, null],
  [7, 1, null, 2, 4, null, 3, null, 9],
  [5, null, null, 8, null, null, 6, null, null],
  [9, null, null, null, null, null, null, null, 7],
  [null, null, null, null, null, 4, null, null, null],
  [null, null, null, null, null, null, 5, null, 6],
  [6, 3, null, 4, null, null, 9, null, 2],
  [null, null, null, null, 1, null, null, 6, null],
  [null, 2, null, 3, null, 9, 4, null, 8]
]

validate(advancedPuzzle)
solve(advancedPuzzle)




