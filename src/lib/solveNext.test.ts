import solveNext from './solveNext'
import novice from '../testData/novice'

describe('solveNext', () => {
  it('Should solve the first cell it can find with a definitive answer, going box to box left to right', () => {
    const answer = solveNext(novice)
    expect(answer).toEqual({
      boxIndex: 0,
      cellIndex: 4,
      possibleValues: [6]
    })
  })
})
