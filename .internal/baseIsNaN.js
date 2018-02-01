/**
 * 检测是否为NaN
 * @param {*} value The value to Check
 * @returns {boolean} Returns `true` if `value` is `NaN`,else `false`
 */

 function baseIsNaN(value) {
     return value !== value
 }

 export default baseIsNaN