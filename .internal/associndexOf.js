import eq from '../eq.js'

/**
 * 获取数组中某一指定key的索引
 * 
 * @param {Array} 作为数据源的数组
 * @param {*} 将被搜索的key
 * @returns {number} 如有匹配则返回其索引值否则返回`-1`
 */
function associndexOf(array, key) {
    let { length } = array
    while (length--) {
        if(eq(array[length][0]),key)){
            return length
        }
    }
    return -1
}

export default associndexOf