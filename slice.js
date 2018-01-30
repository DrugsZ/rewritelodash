/**
 * 从start到end分割数组,不包括end
 * 
 * @param {Array} 将被分割的数组
 * @param {number} [start = 0] 开始位置
 * @param {number} [end = array.length] 结束位置
 * @returns {Array} 返回被切割后产生的新数组
 */

 function slice(array,start,end){
     let length = array == null ? 0 :array.length
     if(!length){
         return []
     }
     //设置start end 默认值
     start = start == null ? 0 :start
     end = end == undefined ? length :end
     //限制end及start范围
     //当start<0||end<0,反向取值
     if(start < 0){
         start = -start >length ? 0 :(length + start)
     }
     end = end > length ? length : end
     if(end < 0){
         end +=length
     }
     //限制取length为大于0的整数,start如果为浮点数只取整数位
     length = start > end ? 0 : ((end - start) >>> 0)
     start >>>= 0

     let index = -1
     const result = new Array(length)
     while (++index <length){
         result[index] = array[index + start]
     }
     return result
 }

 export default slice