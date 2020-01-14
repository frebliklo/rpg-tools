import { getModifier } from '../index'

describe('Get modifier', () => {
  it('should return correct type', () => {
    const modifier = getModifier(10)

    expect(typeof modifier).toBe('string')
  })

  it('should return correct neutral value', () => {
    const modifier = getModifier(10)

    expect(modifier).toBe('0')
  })

  it('should return correct positive value', () => {
    const modifier = getModifier(16)

    expect(modifier).toBe('+3')
  })

  it('should return correct negative calue', () => {
    const modifier = getModifier(7)

    expect(modifier).toBe('-2')
  })
})
