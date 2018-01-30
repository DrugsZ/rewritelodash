/**
 * 对比两个值是否相等
 * 
 * @param  {*} 将被对比的值
 * @param {*} 另一个要被对比的值
 * @returns {boolean} 如果相等返回`true`反之返回`false`
 * 
 * @example
 * 
 * const object =  {'a':1}
 * const other = {'a' : 1}
 * eq(object, object)
 * //=> true
 * 
 * eq(object, other)
 * //=> false
 * 
 * eq('a','a')
 * //=>true
 * 
 * eq('a',object('a'))
 * //=> false
 * 
 * eq(NaN, NaN)
 * //=> true
 */
// (value !==value && other !== other) 在value other等于NaN时,同样返回true
function eq(value,other) {
    return value === other || (value !==value && other !== other)
}

export default eq