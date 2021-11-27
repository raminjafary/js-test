const func = require("../1")

jest.useFakeTimers()

describe("test 1.js", () => {
    let fn
    let f

    beforeEach(() => {
        fn = jest.fn((x, y) => x + y);
        f = func(fn, 1000)
    })

    afterEach(() => {
        jest.clearAllTimers()
    })

    test("it should be called only once", () => {
        for (let i = 0; i < 10; i++) {
            f()
        }
        jest.runAllTimers();
        expect(fn).toBeCalledTimes(1);
    })

    test("it should be called only once by some args", () => {
        for (let i = 0; i < 10; i++) {
            f(1, 2)
        }
        jest.runAllTimers();
        expect(fn).toBeCalledTimes(1);
        expect(fn.mock.results[0].value).toBe(3)
    })

    test("it should be called only with the last args", () => {
		f(1, 2)
		f(2, 3)
		f(3, 4)
		f(4, 5)
		jest.runAllTimers()
		expect(fn).toBeCalledTimes(1)
		expect(fn).toBeCalledWith(4, 5)
		expect(fn.mock.results[0].value).toBe(9)
	})

	test("it can be called again after the delay", () => {
		f(1, 2)
		setTimeout(() => {
			f(3, 4)
		}, 1500)
		jest.runAllTimers()
		expect(fn).toBeCalledTimes(2)
		expect(fn).toHaveBeenNthCalledWith(1, 1, 2)
		expect(fn).toHaveBeenNthCalledWith(2, 3, 4)
	})
})