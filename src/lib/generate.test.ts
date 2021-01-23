import generate from './generate'
import validate from './validate'
import { isFinished } from '../index'

describe('generate', () => {
  it('Should generate a valid random puzzle', () => {
    const puzzle = generate()
    const valid = validate(puzzle)
    const complete = isFinished(puzzle)

    expect(valid).toBe(true)
    expect(complete).toBe(false)
  })
})
