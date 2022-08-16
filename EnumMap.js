
class BiMap {
    constructor(map, inverseMap) {
        this.map = map;
        this.inverseMap = inverseMap;
    }

    static create() {
        return new BiMap(new Map(), new Map());
    }

    get size() {
        return this.map.size;
    }

    set(key, value) {
        const oldValue = this.map.get(key);
        this.inverseMap.delete(oldValue);
        this.map.set(key, value);
        this.inverseMap.set(value, key);
        return this;
    }

    clear() {
        this.map.clear();
        this.inverseMap.clear();
    }

    delete(key) {
        const value = this.map.get(key);
        const deleted = this.map.delete(key);
        const inverseDeleted = this.inverseMap.delete(value);

        return deleted || inverseDeleted;
    }

    entries() {
        return this.map.entries();
    }

    forEach(callbackFn, thisArg) {
        return this.map.forEach(callbackFn, thisArg);
    }

    get(key) {
        return this.map.get(key);
    }

    has(key) {
        return this.map.has(key);
    }

    keys() {
        return this.map.keys();
    }

    inverse() {
        return new BiMap(this.inverseMap, this.map);
    }

    values() {
        return this.inverseMap.keys();
    }

    *[Symbol.iterator]() {
        yield* this.map;
    }
}

const TYPE_MAP = BiMap.create()
TYPE_MAP.set(0, '衣服')

console.log('TYPE_MAP正向:', TYPE_MAP.get(0)); // TYPE_MAP正向: 衣服
console.log('TYPE_MAP逆向: ', TYPE_MAP.inverse().get('衣服')); // TYPE_MAP逆向:  0




