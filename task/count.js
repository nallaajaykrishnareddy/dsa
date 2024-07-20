// closure
const counter = (() => {
  let count = 0;
  function inner() {
    count += 1;
    return count;
  }
  inner.reset = function () {
    count = 0;
  };
  return inner;
})();

counter();
counter();
console.log(counter());
counter.reset();
// counter();
// counter();
console.log(counter());
