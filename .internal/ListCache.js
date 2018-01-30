import assocIndexOf from './assocIndexOf.js'

class ListCache {
    /**
     * 创建链表缓存对象
     * 
     * 
     * @param {Array} [entries]要被缓存的key-value 
     */
    constructor(entries) {
        let index = -1
        const length = entries == null ? 0 :entries.length

        this.clear()
        while (++index < length) {
            const entry = entries[index]
            this.set(entry[0],entry[1])
        }
    }

    /**
     * 删除对象中所有的键值对缓存
     */
    clear() {
        this.__data__  = []
        this.size = 0
    }

    /**
     * 从缓存链表中删除特定`key` 以及其值
     * @param{string} 将要被删除的key
     * @param{boolean} 如果移除成功返回`true` 反之返回`false`
     */
    delete(key) {
        const data = this.__data__
        const index = assocIndexOf(data,key)

        if (index < 0){
            return false
        }
        const lastIndex = data.length - 1
        if(index == lastIndex) {
            data.pop()
        } else {
            data.splice(index,1)
        }
        --this.size
        return true
    }

    /**
     * 获取指定key的值
     * @param {string} 想要获取的key
     * @returns {*} 返回与参数匹配的值
     */

     get(key) {
         const data = this.__data__
         const index = assocIndexOf(data,key)
         return index < 0 ? undefined :data[index][1]
     }

     /**
      * 检查指定key是否存在值
      * @param{string} 要检查的key
      * @returns {boolean} 存在则返回`true` 反之返回`false`
      */
      has(key) {
          return assocIndexOf(this.__data__,key) > -1
      }

      /**
       * 设置键值对
       * @param{string} key
       * @param{*} value
       * @returns {Object} 返回链表缓存实例
       */
    set(key, value){
        const data = this.__data__
        const index = assocIndexOf(data,key)
        
        if(index < 0){
            ++this.size
            data.push([key,value])
        }else{
            data[index][1] = value
        }
        return this
    }
}

export default ListCache