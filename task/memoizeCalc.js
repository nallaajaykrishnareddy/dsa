const { log } = require("node:console");

/**
 *
 * @param {Function} func
 */
function memoize(func) {
  const cache = new Map();

  console.log(func.arguments);

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, func(...args));
    return cache.get(key);
  };
}

const expensiveCalculation = (param1, param2) => {
  return param1 + param2;
};

const memoizedCalculation = memoize(expensiveCalculation);

const result1 = memoizedCalculation(10, 20);
const result2 = memoizedCalculation(10, 20);
