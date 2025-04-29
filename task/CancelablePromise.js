class CancelablePromise extends Error {
  constructor() {
    super("Promise has been canceled");
    this.name = "PromiseCanceledError";
  }
}

Promise.cancelable = (promise) => {
  let isCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise
      .then((val) => {
        if (isCanceled) {
          reject(new CancelablePromise());
        }
        resolve(val);
      })
      .catch((err) => reject(err));
  });
  wrappedPromise.cancel = () => {
    isCanceled = true;
  };
  return wrappedPromise;
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000); // Resolves after 1 second
});

const cancelablePromise = Promise.cancelable(p1);
cancelablePromise.cancel();

cancelablePromise
  .then((val) => console.log(val))
  .catch((err) => console.log(err.message));
