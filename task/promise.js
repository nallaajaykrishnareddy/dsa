const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolvedCount++;
          if (resolvedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    });
  });
};

const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  "",
];

promiseAll(promises)
  .then((re) => console.log(re))
  .catch((err) => console.log(err));
