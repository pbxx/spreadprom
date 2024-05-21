/**
 * ### `sprom`
 * Resolves a promise into an `[err, result]` array.
 * 
 * For simplifying error-catching.
 * @param promise A promise for sprom to handle.
 * @returns 
 */
const sprom = (promise: Promise<any>) => {
    return promise.then((resultParam) => [null, resultParam]).catch((err) => [err])
}
/**
 * ### `osprom`
 * (short for object-sprom)
 * 
 * Resolves a promise into an `{err, result}` object.
 * 
 * For simplifying error-catching.
 * @param promise A promise for sprom to handle.
 * @returns 
 */
const osprom = (promise: Promise<any>) => {
    return promise.then((result) => {return {result}}).catch((err) => {return {err}})
}
export default sprom
export { sprom, osprom }