import {
  getBoxCellPositions,
  getColumnCellPositions,
  getRowCellPositions
} from './getPositions'

describe('getPositions', () => {
  describe('getBoxCellPositions', () => {
    it('Should bring back the positions of all the cells in a box at the passed index', () => {
      const result = getBoxCellPositions(0)

      expect(result).toEqual([
        { boxIndex: 0, cellIndex: 0 },
        { boxIndex: 0, cellIndex: 1 },
        { boxIndex: 0, cellIndex: 2 },
        { boxIndex: 0, cellIndex: 3 },
        { boxIndex: 0, cellIndex: 4 },
        { boxIndex: 0, cellIndex: 5 },
        { boxIndex: 0, cellIndex: 6 },
        { boxIndex: 0, cellIndex: 7 },
        { boxIndex: 0, cellIndex: 8 }
      ])
    })
  })

  describe('getColumnCellPositions', () => {
    it('Should bring back the positions of all the cells in a column at the passed index', () => {
      const result = getColumnCellPositions(3)

      expect(result).toEqual([
        { boxIndex: 1, cellIndex: 0 },
        { boxIndex: 1, cellIndex: 3 },
        { boxIndex: 1, cellIndex: 6 },
        { boxIndex: 4, cellIndex: 0 },
        { boxIndex: 4, cellIndex: 3 },
        { boxIndex: 4, cellIndex: 6 },
        { boxIndex: 7, cellIndex: 0 },
        { boxIndex: 7, cellIndex: 3 },
        { boxIndex: 7, cellIndex: 6 }
      ])
    })
  })

  describe('getRowCellPositions', () => {
    it('Should bring back the positions of all the cells in a row at the passed index', () => {
      const result = getRowCellPositions(7)

      expect(result).toEqual([
        { boxIndex: 6, cellIndex: 3 },
        { boxIndex: 6, cellIndex: 4 },
        { boxIndex: 6, cellIndex: 5 },
        { boxIndex: 7, cellIndex: 3 },
        { boxIndex: 7, cellIndex: 4 },
        { boxIndex: 7, cellIndex: 5 },
        { boxIndex: 8, cellIndex: 3 },
        { boxIndex: 8, cellIndex: 4 },
        { boxIndex: 8, cellIndex: 5 }
      ])
    })
  })
})
