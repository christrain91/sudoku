import getLinkedValuesForPosition from './getLinkedValuesForPosition'
import completePuzzle from '../testData/complete'
import novicePuzzle from '../testData/novice'

describe('getLinkedValuesForPosition', () => {
  it('Should get the values found in the postitions relating to the cell passed on the complete puzzle', () => {
    const { box, row, column } = getLinkedValuesForPosition(
      {
        boxIndex: 4,
        cellIndex: 3
      },
      completePuzzle
    )

    expect(box).toEqual([4, 5, 8, 9, 2, 6, 7, 3, 1])
    expect(column).toEqual([2, 8, 6, 4, 9, 7, 3, 5, 1])
    expect(row).toEqual([7, 5, 3, 9, 2, 6, 4, 1, 8])
  })

  it('Should get the values ignoring null in the positions relating to the passed box and cell indexes', () => {
    const { box, row, column } = getLinkedValuesForPosition(
      {
        boxIndex: 2,
        cellIndex: 7
      },
      novicePuzzle
    )

    expect(box).toEqual([7, 8, 3, 4, 6])
    expect(column).toEqual([7, 3, 2])
    expect(row).toEqual([5, 1, 4, 6])
  })
})
