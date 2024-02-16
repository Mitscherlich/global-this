// @vitest-environment node

import { getGlobalThis } from './global-this'

describe('getGlobalThis', () => {
  it('works in an arrow function', () => {
    expect(getGlobalThis()).to.deep.equal(global)
  })

  it('works in a function', () => {
    expect(getGlobalThis()).to.deep.equal(global)
  })

  it('works in a strict mode arrow function', () => {
    'use-strict'

    expect(getGlobalThis()).to.deep.equal(global)
  })

  it('works in a strict mode function', () => {
    'use-strict'

    expect(getGlobalThis()).to.deep.equal(global)
  })
})
