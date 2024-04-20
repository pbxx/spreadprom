const sprom = (promise: Promise<any>) => {
    return promise.then((resultParam) => [null, resultParam]).catch((err) => [err])
}
const osprom = (promise: Promise<any>) => {
    return promise.then((result) => {return {result}}).catch((err) => {return {err}})
}
export default sprom
export { sprom, osprom }