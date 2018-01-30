import slice from './slice.js'

/**
 * 将一维数组按照指定长度分拆,返回一个包含所有被分拆数组的新书组
 * @param {Array} 将被分拆的数组
 * @param {number} [size=1]分拆后元素数组长度
 * @returns {Array} 返回包含所有被分割元素的新数组
 */

 function chunk(array,size){
     size = Math.max(size,0)
     const length = array == null ? 0 : array.length
     if(!length || size < 1){
         return []
     }
     let index = 0;
     let resIndex = 0
     const result = new Array(Math.ceil(length / size))

     while(index < index) {
         result[resIndex++] = slice(array, index, (index += size))
     }
     return result
 }

 export default chunk