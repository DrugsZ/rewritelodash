/*
 * @Author: DrugsZ 
 * @Date: 2018-03-05 17:58:34 
 * @Last Modified by: DrugsZ
 * @Last Modified time: 2018-03-05 18:00:24
 */
/**
 * 
 * @param {*} args 
 * 将第一个参数作为数组中唯一的元素返回,如果不传入参数则返回空数组
 */
function castArray(...args) {
    if(!args.length) {
        return []
    }
    const value = args[0]
    return Array.isArray(value) ? value : [value]
}

export default castArray