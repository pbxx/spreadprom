/**
 * ### `sprom`
 * Resolves a promise into an `[err, result]` array.
 * 
 * For simplifying error-catching.
 * @param promise A promise for sprom to handle.
 * @returns 
 */
const sprom = async (promise: Promise<any>) => {
    try {
        const resultParam = await promise
        return [null, resultParam]
    } catch (err) {
        return [err]
    }
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
const osprom = async (promise: Promise<any>) => {
    try {
        const result = await promise
        return { result }
    } catch (err) {
        return { err }
    }
}
export default sprom
export { sprom, osprom }