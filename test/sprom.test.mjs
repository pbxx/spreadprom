import { sprom, osprom } from "../dist/sprom.js"
// import sprom from "../sprom.js"
import { expect } from "chai"

async function willReturn() {
	return true
}
async function willError() {
	throw new Error("Function errored...")
}

// Mode A
it("sprom into array definition: should work on resolve", async () => {
	const [err, result] = await sprom(willReturn())
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(err).to.not.be.ok
	expect(result).to.be.ok
	return
})
it("sprom into array definition: should work on error", async () => {
	const [err, result] = await sprom(willError())
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(result).to.not.be.ok
	expect(err).to.be.ok
	expect(err).to.be.an("error")
	return
})

// Mode B
it("sprom into array: should work on resolve", async () => {
	const results = [...(await sprom(willReturn()))]
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(results).to.be.an("array")
	expect(results[0]).to.not.be.ok
	expect(results[1]).to.be.ok
	return
})
it("sprom into array: should work on error", async () => {
	const results = [...(await sprom(willError()))]
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(results).to.be.an("array")
	expect(results[0]).to.be.ok
	expect(results[0]).to.be.an("error")
	expect(results[1]).to.not.be.ok

	return
})

// osprom
it("osprom into variable: should work on resolve", async () => {
	let res = await osprom(willReturn())
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	// console.log(res)
	expect(res).to.be.an("object")
	expect(res.err).to.not.be.ok
	expect(res.result).to.be.ok
	return
})
it("osprom into variable: should work on error", async () => {
	let res = await osprom(willError())
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	// console.log(res)
	expect(res).to.be.an("object")
	expect(res.result).to.not.be.ok
	expect(res.err).to.be.ok
	return
})


/*
it("speed test of regular try catch block", async () => {
	var result
    try {
        result = await willReturn()
    } catch (err) {
        throw err
    }
	// expect(err).to.not.be.ok
	expect(result).to.be.ok
	return
})
*/