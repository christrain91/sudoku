import { Coordinate, Puzzle, PuzzleNumber, PuzzleValue } from './definitions'

export default function getValuesForPosition(coordinates: [Coordinate, Coordinate], puzzle: Puzzle) : { row: PuzzleNumber[], column: PuzzleNumber[], box: PuzzleNumber[]} {
  return {
    row: getValuesForRow(coordinates[1], puzzle),
    column: getValuesForColumn(coordinates[0], puzzle),
    box: getValuesForBox(coordinates, puzzle)
  }
}

export function getValuesForRow (rowNumber: Coordinate, puzzle: Puzzle) : PuzzleNumber[] {
  const row = puzzle[rowNumber]
  return filterValues(row)
}

export function getValuesForColumn (columnNumber: Coordinate, puzzle: Puzzle) : PuzzleNumber[] {
  const column = puzzle.map(row => row[columnNumber])
  return filterValues(column)
}

function getValuesForBox(coordinates: [Coordinate, Coordinate], puzzle: Puzzle) : PuzzleNumber[] {
  const boxCoords = getBoxCooridinates(coordinates)
  const box = boxCoords.map(boxCoord => puzzle[boxCoord[0]][boxCoord[1]])
  return filterValues(box)
}

export function getBoxCooridinates(coordinates: [Coordinate, Coordinate]) : [Coordinate, Coordinate][] {
  const [ x, y ] = coordinates
  const xPositions = getPositionsForBoxOnSingleAxis(x)
  const yPositions = getPositionsForBoxOnSingleAxis(y)
 
  const positions: [Coordinate, Coordinate][] = []

  xPositions.forEach(xPosition => {
    yPositions.forEach(yPosition => {
      positions.push([yPosition, xPosition])
    })
  })

  return positions
}

function getPositionsForBoxOnSingleAxis(coordinate: Coordinate) : Coordinate[] {
  let startingPosition: 0 | 3 | 6 = 0 
  if (coordinate >= 6)  {
    startingPosition = 6
  } else if (coordinate >= 3) {
    startingPosition = 3
  }

  return [startingPosition, startingPosition + 1, startingPosition + 2]
}

function filterValues (values: PuzzleValue[]) : PuzzleNumber[] {
  return values.filter(v => v !== null) as PuzzleNumber[]
}