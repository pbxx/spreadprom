const sprom = (promise) => {
    return promise.then((resultParam) => [null, resultParam]).catch((err) => [err])
}
const osprom = (promise) => {
    return promise.then((result) => {return {result}}).catch((err) => {return {err}})
}
export default sprom
export { sprom, osprom }