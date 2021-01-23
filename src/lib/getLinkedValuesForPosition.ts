import {
  BoxIndex,
  Position,
  Puzzle,
  PuzzleNumber,
  PuzzleValue
} from '../definitions'

export default function getLinkedValuesForPosition(
  position: Position,
  puzzle: Puzzle
): { row: PuzzleNumber[]; column: PuzzleNumber[]; box: PuzzleNumber[] } {
  return {
    row: getValuesForRow(position, puzzle),
    column: getValuesForColumn(position, puzzle),
    box: getValuesForBox(position.boxIndex, puzzle)
  }
}

export function getValuesForRow(
  position: Position,
  puzzle: Puzzle
): PuzzleNumber[] {
  const rowSets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]

  return getValuesFromSet(position, puzzle, rowSets)
}

export function getValuesForColumn(
  position: Position,
  puzzle: Puzzle
): PuzzleNumber[] {
  const columnSets = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]

  return getValuesFromSet(position, puzzle, columnSets)
}

function getValuesFromSet(
  position: Position,
  puzzle: Puzzle,
  sets: number[][]
): PuzzleNumber[] {
  const boxSet = sets.find((set) => set.includes(position.boxIndex)) || []
  const cellSet = sets.find((set) => set.includes(position.cellIndex)) || []

  const values: PuzzleValue[] = []

  boxSet.forEach((boxIndex) => {
    cellSet.forEach((cellIndex) => {
      values.push(puzzle[boxIndex][cellIndex])
    })
  })

  return filterValues(values)
}

function getValuesForBox(boxIndex: BoxIndex, puzzle: Puzzle): PuzzleNumber[] {
  const box = puzzle[boxIndex]
  return filterValues(box)
}

function filterValues(values: PuzzleValue[]): PuzzleNumber[] {
  return values.filter((v) => v !== null) as PuzzleNumber[]
}
