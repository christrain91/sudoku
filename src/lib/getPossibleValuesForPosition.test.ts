import getPossibleValuesForPosition from './getPossibleValuesForPosition'
import novice from '../testData/novice'

describe('getPossibleValuesForPosition', () => {
  it('Should give the current valid possible values for a given empty cell index', () => {
    const result = getPossibleValuesForPosition(
      { boxIndex: 0, cellIndex: 0 },
      novice
    )
    expect(result).toEqual([2, 4, 8])
  })
})
