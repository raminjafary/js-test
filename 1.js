module.exports = function func(fn, ms) {
    let isCalled
    let lastArgs
	return (...args) => {
        // to execute fn with last args.
        lastArgs = args
        // to check fn can execute or not.
		if (!isCalled) {
			setTimeout(() => {
				fn(...lastArgs)
                // reset isCalled, to execute fn again after finish delay.
				isCalled = false
			}, ms)
            // to execute fn just once in a delay.
			isCalled = true
		}
	}
}
