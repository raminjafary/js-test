### Problems

1. Delay the execution of multiple variadic function invokations by variable number of milliseconds and only let the last function call to pass through. The test (`tests/1.test.js`) should pass. Example:

```js
function func (fn, ms) {

}

const f = () = {}
const fn = func(f, 1000)
fn(...args)
fn(...args)
fn(...args)
fn(...args) // This is the one being executed!
```

**Bonus:**  How would you implement it to invoke a function based on available browser frame rate (fps)? 
