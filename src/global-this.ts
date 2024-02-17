/**
 * Manually portal from @tanker/global-this, without tanker-sdk typings.
 * @see https://github.com/TankerHQ/sdk-js/blob/23a5f8180ff862e08c9ec1197d10214c8c25b6bf/packages/global-this/src/global-this.ts
*/

// Warning: don't replace this module by the core-js-pure ponyfill
//          which is too naïve.
//
// Note: the __global_this__ trick did not work in Safari + Karma,
//       so we continue to test global variables first :'-(
export function getGlobalThis() {
  // Modern runtimes (ES2020 compatible)
  if (typeof globalThis !== 'undefined')
    return globalThis

  // Browser main thread
  if (typeof window !== 'undefined')
    return window

  // Browser worker
  if (typeof WorkerGlobalScope !== 'undefined')
    return self

  // Node.js
  if (typeof global !== 'undefined')
    return global

  // Other JS envs not in strict mode
  // @ts-expect-error: cannot explicitly type 'this' as any
  // eslint-disable-next-line @typescript-eslint/no-invalid-this
  if (this) {
    // @ts-expect-error: cannot explicitly type 'this' as any
    // eslint-disable-next-line @typescript-eslint/no-invalid-this
    return this
  }

  // All other cases
  // See: https://mathiasbynens.be/notes/globalthis
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Object.prototype, '__global_this__', {
    get() { return this },
    configurable: true,
  })

  try {
    // @ts-expect-error: we just defined __global_this__
    return __global_this__
  }
  finally {
    // @ts-expect-error: we just defined __global_this__
    delete Object.prototype.__global_this__
  }
}
