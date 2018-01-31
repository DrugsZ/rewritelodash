import Hash from "./Hash.js";
import ListCache from "./ListCache";

/**
 * 从map中获取数据
 * 
 * @param {Object} 数据源
 * @param {string} 希望获取的key
 * @returns {*} 返回map
 */

 function getMapData({__data__}, key) {
     const data = __data__
     return isKeyable(key)
     ?data[typeof key == 'string' ? 'string' : 'hash']
     :data.map
 }

 /**
  * 检查当前value是否可以作为`key`使用
  *@param {*} The value to check
  *@returns {boolean} Returns `true` if `value` is suitable,else `false`
  */

  function isKeyable(value) {
      const type = typeof value
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null)
  }

  class MapCache {      
      /**
       * 
       * @param {Array} [entries] 将被缓存的键值对 
       */
      constructor(entries) {
          let index = -1
          const length = entries == null ? 0 :entries.length

          this.clear()
          while(++index < length){
              const entry = entries[index]
              this.set(entry[0], entry[1])
          }
      }

      /**
       * 清除全部map缓存
       */
      clear() {
          this.size = 0
          this.__data__ = {
              'hash':new Hash,
              'map' : new (Map || ListCache),
              'string' : new Hash
          }
      }

      /**
       * 删除指定`key`
       * @param {string} 将要删除的key
       * @returns {boolean} 删除成功返回`true`,反之返回`false`
       */

       delete(key) {
           const result = getMapData(this,key)['delete'](key)
           this.size -= result ? 1 : 0
           return result
       }

       /**
        * 根据`key`获取`value`
        * @param {string} key The key of the value to get
        * @returns {*} Returns the entry value.
        */

        get (key){
            return getMapData(this,key).get(key)
        }

        /**
         * 检查指定`key`是否存在`value`
         * @param {string} key the key of entry to check
         * @returns {boolean} Retruns `true` if an entry for `key` exists,else `false.
         * 
         */
        has(key) {
            return getMapData(this,key).has(key)
        }

        /**
         * 设置键值对
         * @param {string} key The key of the value to set
         * @param {*} value The value to set
         * @returns {Object} Returns the map cache instance
         */
        set(key,value) {
            const data = getMapData(this, key)
            const size = data.size
            data.set(key, value)
            this.size += data.size == size ? 0 : 1
            return this
        }
  }

export default MapCache