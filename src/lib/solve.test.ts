import solve from './solve'
import novice, { solution } from '../testData/novice'

describe('solve', () => {
  it('Should give the correct solution to the novice puzzle', () => {
    const answer = solve(novice)
    expect(answer).toEqual({
      success: true,
      puzzle: solution
    })
  })
})
