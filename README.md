# simpler-debounce

An implementation of [debounce](https://www.npmjs.com/package/debounce) with significantly less code.

```js
var debounce = require('debounce')
window.onresize = debounce(resize, 200)
 
function resize (e) {
  console.log('height', window.innerHeight)
  console.log('width', window.innerWidth)
}
```

## debounce

> `debounce(fn, wait)`

Creates and returns a new debounced version of the passed function that will
postpone its execution until after wait milliseconds have elapsed since the
last time it was invoked.
