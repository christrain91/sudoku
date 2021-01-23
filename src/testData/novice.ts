import { Puzzle } from '../definitions'

const n = null
// Novice Puzzle 47
const novice: Puzzle = [
  [n, n, 3, n, n, n, 5, 1, n],
  [n, n, n, n, n, 2, n, n, n],
  [n, 7, n, 8, 3, n, 4, n, 6],
  [6, 7, n, n, 9, n, n, n, n],
  [n, 4, n, 8, n, n, n, n, 6],
  [n, n, n, n, n, n, n, n, n],
  [n, 4, n, n, n, n, 9, n, n],
  [n, n, n, 1, 7, n, n, n, 5],
  [n, n, n, n, n, n, 7, 2, n]
]

export const solution = [
  [4, 8, 3, 7, 6, 9, 5, 1, 2],
  [9, 6, 1, 4, 5, 2, 7, 3, 8],
  [5, 7, 2, 8, 3, 1, 4, 9, 6],
  [6, 7, 5, 1, 9, 4, 3, 2, 8],
  [3, 4, 9, 8, 2, 7, 5, 1, 6],
  [2, 1, 8, 6, 5, 3, 9, 4, 7],
  [8, 4, 7, 2, 5, 6, 9, 3, 1],
  [2, 9, 3, 1, 7, 4, 6, 8, 5],
  [1, 6, 5, 3, 8, 9, 7, 2, 4]
]

export default novice
