/**
 * 创建一个调用 func 的函数。 调用次数不超过 N 次。 之后再调用这个函数，将返回最后一个调用的结果。
 * 
 * @param {number} n 
 * @param {function} func
 */
function before(n, func) {
    let result
    if(typeof func != 'function') {
        throw new TypeError('Expected a function')
    }
    return function(...args) {
        if( --n > 0) {
            result = func.apply(this,args)
        }
        if(n <= 1) {
            func = undefined
        }
        return result
    }
}