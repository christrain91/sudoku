import {
  Index,
  NextAnswer,
  Position,
  PositionAndValue,
  Puzzle,
  PuzzleNumber
} from '../definitions'
import getPossibleValuesForPosition from './getPossibleValuesForPosition'
import { getBoxValues, getColumnValues, getRowValues } from './getValues'

export default function solveNext(puzzle: Puzzle): NextAnswer | null {
  const getValueFns = [getBoxValues, getColumnValues, getRowValues]

  const indexes: Index[] = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  for (let getValuesFn of getValueFns) {
    for (let index of indexes) {
      const positionValues = getValuesFn(puzzle, index)
      const result = solveForLinkedPositions(positionValues, puzzle)
      if (result) {
        return result
      }
    }
  }

  return null
}

function solveForLinkedPositions(
  positionValues: PositionAndValue[],
  puzzle: Puzzle
): NextAnswer | null {
  const missingNumbers = getMissingNumbers(positionValues)
  const emptyPositions = getEmptyPositions(positionValues)

  const possible = getPossibleValuesForPositions(emptyPositions, puzzle)

  const positionWithOneAnswer = possible.find((p) => {
    return p.possibleValues.length === 1
  })

  if (positionWithOneAnswer) {
    return {
      ...positionWithOneAnswer.position,
      possibleValues: positionWithOneAnswer.possibleValues
    }
  }

  for (let missingNumber of missingNumbers) {
    const possiblePositions = possible.filter((p) =>
      p.possibleValues.includes(missingNumber)
    )

    if (possiblePositions.length === 1) {
      return {
        ...possiblePositions[0].position,
        possibleValues: [missingNumber]
      }
    }
  }

  return null
}

function getPossibleValuesForPositions(
  positions: Position[],
  puzzle: Puzzle
): { position: Position; possibleValues: PuzzleNumber[] }[] {
  return positions.map((position) => {
    const possibleValues = getPossibleValuesForPosition(position, puzzle)
    return { position, possibleValues }
  })
}

function getMissingNumbers(positionValues: PositionAndValue[]): PuzzleNumber[] {
  const numbers: PuzzleNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return numbers.filter((num) => !positionValues.find((pv) => pv.value === num))
}

function getEmptyPositions(positionValues: PositionAndValue[]): Position[] {
  return positionValues
    .filter((positionValue) => positionValue.value === null)
    .map((pv) => pv.position)
}
