/**
 * 这个方法创建一个新函数，当调用 N 次或者多次之后将触发 func 方法。
 * 
 * @param { number }调用次数
 * @param { Function } 被调用函数
 */

after = (n, func) => {
    if(typeof func != 'function'){
        throw new TypeError('Expected a function')
    }
    return function(...args){
        if (--n < 1) {
            return func.apply(this, args)
        }
    }
}


export default after