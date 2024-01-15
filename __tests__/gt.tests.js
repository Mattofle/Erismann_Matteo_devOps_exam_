/* eslint-disable no-undef */
const gamerTag = require('../gamertag')

describe('A suite of test for gamerTag', function () {
  it('gamerTag has at least 8 characters', function () {
    const result = gamerTag.checkGamerTag('Mattofle')

    expect(result).toBe('gamer tag ok')
  })
})