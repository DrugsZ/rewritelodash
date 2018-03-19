import slice from "../.slice.js";

/**
 * 以`n`为起点对`array`进行切割
 * @param {array} 被切割的数组
 * @param {number} 切割起点
 * 
 * @returns 返回切割后数组剩余部门
 */
drop = (array, n=1) => {
  const length = array == null ? 0 : array.length
  return length ? slice(array, n < 0 ? 0 : n, length) : []
};

export default drop
