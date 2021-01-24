import {
  getBoxCellPositions,
  getColumnCellPositions,
  getRowCellPositions
} from './getPositions'

import {
  BoxIndex,
  Position,
  Puzzle,
  Index,
  PositionAndValue
} from '../definitions'

export function getBoxValues(
  puzzle: Puzzle,
  boxIndex: BoxIndex
): PositionAndValue[] {
  const positions = getBoxCellPositions(boxIndex)
  return getValuesForPositions(puzzle, positions)
}

export function getColumnValues(
  puzzle: Puzzle,
  columnIndex: Index
): PositionAndValue[] {
  const positions = getColumnCellPositions(columnIndex)
  return getValuesForPositions(puzzle, positions)
}

export function getRowValues(
  puzzle: Puzzle,
  rowIndex: Index
): PositionAndValue[] {
  const positions = getRowCellPositions(rowIndex)
  return getValuesForPositions(puzzle, positions)
}

function getValuesForPositions(
  puzzle: Puzzle,
  positions: Position[]
): PositionAndValue[] {
  return positions.map((position) => {
    return {
      position,
      value: puzzle[position.boxIndex][position.cellIndex]
    }
  })
}
