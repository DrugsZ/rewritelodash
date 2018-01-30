/**
 * 移除传入数组中所有假值:`false`,`null`,`0`,`""`,`undefined`,`NaN`
 * 
 * @param {Array} 将被压缩的数组
 * @returns {Array} 返回压缩后的数组
 */

 function compact(array) {
    let resIndex =  0
    const result = []

    if(array == null){
        return result
    }

    for (const value of array) {
        if(value){
            result[resIndex++] = value
        }
    }
    return result
 }

 export default compact