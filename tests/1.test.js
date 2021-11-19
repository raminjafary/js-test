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
})