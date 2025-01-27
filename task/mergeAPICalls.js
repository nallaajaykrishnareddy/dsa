function createGetAPIWithMerging(getAPI) {
  const cache = new Map();

  return async function (path, config) {
    const key = JSON.stringify({ path, config });

    if (cache.has(key)) {
      return cache.get(key).promise;
    }

    const promise = getAPI(path, config).then((res) => {
      setTimeout(() => {
        cache.delete(key);
      }, 1000);

      return res;
    });
    cache.set(key, { promise });
    return promise;
  };
}
