import { getGlobalThis } from './global-this'

const __global_this__: typeof globalThis = getGlobalThis()

export { __global_this__ as globalThis }
