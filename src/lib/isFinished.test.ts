import isFinished from './isFinished'
import complete from '../testData/complete'
import novice from '../testData/novice'

describe('isFinished', () => {
  it('Should return true if passed a complete puzzle', () => {
    const result = isFinished(complete)
    expect(result).toBe(true)
  })

  it('Should return false if passed an imcomplete puzzle', () => {
    const result = isFinished(novice)
    expect(result).toBe(false)
  })
})
