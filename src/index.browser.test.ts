// @vitest-environment jsdom

import { globalThis } from './index'

describe('globalThis', () => {
  it('is always defined', () => {
    expect(globalThis).to.exist // not null nor undefined
  })

  it('is equal to window', () => {
    expect(globalThis).to.deep.equal(window)
  })

  it('is equal to self', () => {
    expect(globalThis).to.deep.equal(self)
  })
})
