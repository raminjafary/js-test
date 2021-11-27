module.exports = function func(fn, ms) {
    let isCalled
    let lastArgs
	return (...args) => {
        lastArgs = args
		if (!isCalled) {
			setTimeout(() => {
				fn(...lastArgs)
				isCalled = false
			}, ms)
			isCalled = true
		}
	}
}
