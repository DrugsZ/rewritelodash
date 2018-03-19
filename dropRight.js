import slice from './slice.js'

/**
 * 从右向左切割'array'
 * @param {array} 将被切割的数组
 * @param {number} 将被切割的数量
 * 
 * @returns 返回切割后剩余数组
 */
dropRight = (array, n=1) => {
  const length = array == null ? 0 : array.length
  return length ? slice( array, 0 , n　< 0 ? 0 : -n ) : []
}

export default dropRight4