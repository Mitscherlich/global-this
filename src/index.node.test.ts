// @vitest-environment node

import { globalThis } from './index'

describe('globalThis', () => {
  it('is always defined', () => {
    expect(globalThis).to.exist // not null nor undefined
  })

  it('is equal to global', () => {
    expect(globalThis).to.deep.equal(global) // not null nor undefined
  })
})
