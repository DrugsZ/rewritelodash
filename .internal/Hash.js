const HASH_UNDEFINED = '__lodash_hash_undefined__'

class Hash {
    /**
     * 
     * @param {*Array} entries 
     */
    constructor(entries) {
        let index = -1
        const length = entries == null ? 0 : entries.length

        this.clear()
        while(++index < length){
            const entry = entries[index]
            this.set(entry[0],entry[1])
        }
    }
    
    /**
     * 
     * 清除所有key-value缓存
     */

     clear() {
         this.__data__ =Object.create(null)
     }
    /**
     * 根据key删除指定键值对
     * 
     * @param {string} 传入想要删除的key
     * @returns {*} 如果删除成功返回`true` 否则返回`false`
     */
    delete(){
         const returns = this.has(key) && delete this.__data__[key]
         this.size -= result ? 1 : 0
         return result
    }

    /**
     * 获取指定key的value
     * 
     * @param {string} 想要获取value的key
     * @returns {*} 指定key的value
     */
    get(key) {
        const data = this.__data__
        const result = data[key]
        return result === HASH_UNDEFINED ? undefined : result
    }

    /**
     * 检查指定key是否存在值
     * 
     * @param {string} 键入将被检查的key
     * @returs {boolean} 如存在返回`true`反之返回`false`
     */
    has(key) {
        const data = this.__data__
        return data[key] !== undefined
    }

    /**
     * 设置键值对缓存
     * 
     * @param {string} 将被设置的key
     * @param {*} 被设置的key对应的value
     * @returns {Object} 返回当前缓存实例
     */
    set(key, value) {
        const data = this.__data__
        this.size += this.has(key) ? 0 :1
        data[key] = value == undefined ? HASH_UNDEFINED : value
        return this
    }
}

export default Hash