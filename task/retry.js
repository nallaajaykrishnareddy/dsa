const retryPromise = (fn, retries = 3, delay = 100) => {
  return new Promise((resolve, reject) => {
    const attempts = (n) => {
      Promise.resolve(fn())
        .then((data) => resolve(data))
        .catch((err) => {
          if (n <= 1) {
            reject(err);
            console.log("Final failure:", err); // Log final failure
          } else {
            console.log(`Retrying... Attempts left: ${n - 1}`); // Log retry attempt

            setTimeout(() => {
              attempts(n - 1);
            }, delay);
          }
        });
    };
    attempts(retries);
  });
};

retryPromise(() => Promise.reject(1))
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
