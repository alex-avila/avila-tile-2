// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export default function(func, wait, immediate) {
  let timeout

  return function executedFunction() {
    const context = this
    const args = arguments

    const later = function() {
      // null timeout to indicate the debounce ended
      timeout = null

      // Call function now if you did not on the leading end
      if (!immediate) func.apply(context, args)
    }

    // Determine if you should call the function
    // on the leading or trail end
    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}
