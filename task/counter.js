function makeCounter(initialValue = 0) {
  let counter = initialValue;
  return {
    increment: function () {
      counter += 1;
      return counter;
    },
    decrement: function () {
      counter -= 1;
      return counter;
    },
    reset: function () {
      counter = initialValue;
      return counter;
    },
  };
}

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());
