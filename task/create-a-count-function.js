function count() {
  let count = 0;
  function inner() {
    count += 1;
    return count;
  }
  inner.reset = () => {
    count = 0;
    return count;
  };
  return inner;
}

const countFn = count();
countFn();
countFn();
console.log(countFn());
console.log(countFn.reset());
console.log(countFn());
