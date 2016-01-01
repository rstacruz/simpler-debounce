// thanks https://github.com/riot/route/blob/master/lib/index.js
module.exports = function debounce (fn, delay) {
  var t
  return function () {
    clearTimeout(t)
    t = setTimeout(fn, delay)
  }
}
