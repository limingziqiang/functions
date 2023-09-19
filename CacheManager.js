class CacheManager {
  constructor() {
    this.cache = new Map();
    this.expirationTimes = new Map();
  }

  set(key, value, expirationTime) {
    this.cache.set(key, value);
    const currentTime = Date.now();
    const expirationTimestamp = currentTime + expirationTime;
    this.expirationTimes.set(key, expirationTimestamp);
  }

  get(key) {
    const currentTime = Date.now();
    if (this.expirationTimes.has(key)) {
      const expirationTimestamp = this.expirationTimes.get(key);
      if (currentTime <= expirationTimestamp) {
        return this.cache.get(key);
      } else {
        this.cache.delete(key);
        this.expirationTimes.delete(key);
      }
    }
    return undefined;
  }

  clearExpired() {
    const currentTime = Date.now();
    for (const [key, expirationTimestamp] of this.expirationTimes) {
      if (currentTime > expirationTimestamp) {
        this.cache.delete(key);
        this.expirationTimes.delete(key);
      }
    }
  }

  clearAll() {
    this.cache.clear();
    this.expirationTimes.clear();
  }
}

const cacheManager = new CacheManager();

cacheManager.set('key1', 'value1', 1000);  // 过期时间为1秒
cacheManager.set('key2', 'value2', 5000);  // 过期时间为5秒

console.log(cacheManager.get('key1'));  // 输出: value1
console.log(cacheManager.get('key2'));  // 输出: value2

setTimeout(() => {
  console.log(cacheManager.get('key1'));  // 输出: undefined，因为已经过期被清除
  console.log(cacheManager.get('key2'));  // 输出: value2，还未过期
}, 2000);

setTimeout(() => {
  cacheManager.clearExpired();  // 清除过期项
  console.log(cacheManager.get('key1'));  // 输出: undefined
  console.log(cacheManager.get('key2'));  // 输出: value2
}, 6000);
