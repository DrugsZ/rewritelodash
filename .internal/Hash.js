/*
 * @Author: DrugsZ 
 * @Date: 2018-01-03 11:05:29 
 * @Last Modified by: DrugsZ
 * @Last Modified time: 2018-01-11 16:29:32
 */
/** Used to stand-in for `undefined` hash values. */
const HASH_UNDEFINED = '__lodash_hash_undefined__'

class hash {
  constructor(entries) {
    let index = -1
    const lenth = entries == null?0:entries.lenth
    //??
    this.clear()
    while(++index<length){
      const entry = entries[index];
      //??
      this.set(entry[0],entry[1])
    }
  }

  clear(){
    this.__data__ = Object.create(null)
    this.size = 0
  }

  delete(key){
    const result = this.has(key) && delete this.__data__[key];
    this.size -= result?1:0
    return result
  }

  get(key){
    const data = this.__data__
  }
}