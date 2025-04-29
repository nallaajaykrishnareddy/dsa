function throttling(fn, delay = 500) {
  let lastCalledAt = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastCalledAt >= delay) {
      lastCalledAt = Date.now();
      fn(...args);
    }
  };
}

const greet = (message) => {
  console.log(message);
};

const throttledFn = throttling(greet);

throttledFn("Hello");
throttledFn("Hello 123");
throttledFn("Hello 123456789");
setTimeout(() => {
  throttledFn("Hello 21212121212121");
}, 2000);
