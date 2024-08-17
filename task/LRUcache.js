class Cache {
  constructor(size) {
    this.map = new Map();
    this.size = size;
  }

  getValue(key) {
    if (!this.map.has(key)) {
      return null;
    }
    const value = this.map.get(key);
    // Move the accessed item to the end (most recently used)
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  setValue(key, value) {
    if (this.map.has(key)) {
      // If the key already exists, remove it to update its position
      this.map.delete(key);
    } else if (this.map.size >= this.size) {
      // Remove the oldest entry (first item in the Map)
      this.map.delete(this.map.keys().next().value);
    }
    // Insert the new key-value pair (most recently used)
    this.map.set(key, value);
  }
}

const cache = new Cache(3);
cache.setValue("1", "Ajay");
cache.setValue("2", "Krishna");
cache.setValue("3", "Reddy");
cache.setValue("4", "Nalla");
cache.getValue("3");

console.log(cache.map);
