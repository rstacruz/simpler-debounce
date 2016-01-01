var debounce = require('./index')
var test = require('tape')

test('debounce', function (t) {
  t.plan(1)

  var calls = 0
  var fn = debounce(function () {
    t.pass('called')
    t.end()
  })

  fn()
  fn()
  fn()
})
