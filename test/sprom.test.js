import sprom from "../sprom.js"
import { expect } from "chai"

async function willReturn() {
	return true
}
async function willError() {
	throw new Error("Function errored...")
}

// Mode A
it("should return correct values while being unpacked into variables", async () => {
	var [err, result] = await sprom(willReturn())
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(err).to.not.be.ok
	expect(result).to.be.ok
	return
})
it("should return correct values on error while being unpacked into variables", async () => {
	var [err, result] = await sprom(willError())
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(result).to.not.be.ok
	expect(err).to.be.ok
	expect(err).to.be.an("error")
	return
})

// Mode B
it("should return a complete result array while being spread into an array", async () => {
	let results = [...(await sprom(willReturn()))]
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(results).to.be.an("array")
	expect(results[0]).to.not.be.ok
	expect(results[1]).to.be.ok
	return
})
it("should return a complete failed result array while being spread into an array", async () => {
	let results = [...(await sprom(willError()))]
	// expect(results).to.be.an("array").that.is.not.empty
	// console.log(Array.isArray(results))
	expect(results).to.be.an("array")
	expect(results[0]).to.be.ok
	expect(results[0]).to.be.an("error")
	expect(results[1]).to.not.be.ok

	return
})
