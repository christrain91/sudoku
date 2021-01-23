export type PuzzleNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type PuzzleValue = null | PuzzleNumber

export type PuzzleBox = [
  PuzzleValue,
  PuzzleValue,
  PuzzleValue,
  PuzzleValue,
  PuzzleValue,
  PuzzleValue,
  PuzzleValue,
  PuzzleValue,
  PuzzleValue
]
export type Puzzle = [
  PuzzleBox,
  PuzzleBox,
  PuzzleBox,
  PuzzleBox,
  PuzzleBox,
  PuzzleBox,
  PuzzleBox,
  PuzzleBox,
  PuzzleBox
]

export type BoxIndex = number
export type CellIndex = number

export type Position = { boxIndex: BoxIndex; cellIndex: CellIndex }

export interface NextAnswer {
  boxIndex: number
  cellIndex: number
  possibleValues: PuzzleNumber[]
}
