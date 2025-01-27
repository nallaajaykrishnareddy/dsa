function storeMessage(message) {
  const cache = new Map();
  if (!cache.has(message)) {
    cache.set(message, () => {
      return message;
    });
  }

  return cache.get(message);
}

const hello = storeMessage("Hello, world!");
console.log(hello());
