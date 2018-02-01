/**
 * 严格相等情况下的indexof搜索
 * 
 * @param{Array} array The array to inspect
 * @param{*} value The value to search for
 * @param {number} fronIndex The index to search from
 * @returns {number} Returns the index of the matched value, else `-1`
 */

 function strictIndexOf(array, value, fromIndex) {
     let index = fromIndex -1
     const { length } = array
     
     while (++index < length) {
         if (array[index] === value)
         {
             return index
         }
     }
     return -1
 }

 export default strictIndexOf