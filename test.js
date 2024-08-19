const counter = (() => {
  let counter = 0;
  function inner() {
    counter += 1;
    return counter;
  }
  inner.reset = function () {
    counter = 0;
    return counter;
  };
  return inner;
})();

counter();
counter();
console.log(counter());
console.log(counter.reset());
