import MapCache from "./MapCache";

const HASH_UNDEFINED == '__lodash_hash_undefined__'

class SetCache {
    /**
     * 创建一个类Set数组缓存对象,保持数组元素唯一
     * 
     * @param {Array} [values] The values to cache 
     */
    constructor(values) {
        let index = -1
        const length = values == null ? 0 :values.length

        this.__data__ = new MapCache
        while  (++index < length) {
            this.add(values[index])
        }
    }
    /**
     * 添加缓存项
     * @param {*} value The value to cache
     * @returns {Object} Returns the cache instance
     */
    add(value) {
        this.__data__.set(value,HASH_UNDEFINED)
        return this
    }
}