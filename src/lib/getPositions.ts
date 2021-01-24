import { Position, BoxIndex, CellIndex, Index } from '../definitions'
import { times, flatten } from 'lodash'

export function getBoxCellPositions(boxIndex: BoxIndex): Position[] {
  return times(9, (cellIndex) => ({
    boxIndex,
    cellIndex: cellIndex as CellIndex
  }))
}

export function getColumnCellPositions(columnIndex: Index): Position[] {
  const maps: Index[][] = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]

  return getPositionsForMaps(columnIndex, maps)
}

export function getRowCellPositions(rowIndex: Index): Position[] {
  const maps: Index[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]

  return getPositionsForMaps(rowIndex, maps)
}

function getPositionsForMaps(index: Index, maps: Index[][]): Position[] {
  let boxMap: Index[] = []
  let cellMap: Index[] = []

  if (index <= 2) {
    boxMap = maps[0]
    cellMap = maps[index] || []
  } else if (index <= 5) {
    boxMap = maps[1]
    cellMap = maps[index - 3] || []
  } else {
    boxMap = maps[2]
    cellMap = maps[index - 6] || []
  }

  return flatten(
    boxMap.map((boxIndex) =>
      cellMap.map((cellIndex) => ({ boxIndex, cellIndex }))
    )
  )
}
