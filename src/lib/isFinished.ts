import { Puzzle } from '../definitions'

function isFinished(puzzle: Puzzle): boolean {
  const boxWithNull = puzzle.find((box) => {
    return box.indexOf(null) > -1
  })

  return !boxWithNull
}

export default isFinished
