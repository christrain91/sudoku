export type PuzzleNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type PuzzleValue = null | PuzzleNumber
export type PuzzleSet = [PuzzleValue, PuzzleValue, PuzzleValue, PuzzleValue, PuzzleValue, PuzzleValue, PuzzleValue, PuzzleValue, PuzzleValue]
export type Puzzle = [PuzzleSet, PuzzleSet, PuzzleSet, PuzzleSet, PuzzleSet, PuzzleSet, PuzzleSet, PuzzleSet, PuzzleSet]

export type Coordinate = number