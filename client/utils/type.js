/**
 * 数据类型判断
 * @param value 被判断变量
 * @return { Boolean } 是否
 * @author 王磊
 * @date 2017/12/13
 */ 
const Stringfy = String.prototype.toString;
export function isString(value){
    return value.call(value) === '[object String]';
}
export function isNumber(value){
    return value.call(value) === '[object Number]';
}
export function isBoolean(value){
    return value.call(value) === '[object Boolean]';
}
export function isUndefined(value){
    return Stringfy.call(value) === '[object Undefined]';
}
export function isNull(value){
    return Stringfy.call(value) === '[object Null]';
}
export function isFunction(value){
    return Stringfy.call(value) === '[object Function]';
}
export function isArray(value){
    return Stringfy.call(value) === '[object Array]';
}
export function isObject(value){
    return Stringfy.call(value) === '[object Object]';
}
export function isNaN(value){
    return isNaN(value);
}
export function isEmptyObj(obj){
    for(var j in obj) {
        return false;
    }
    return true;
}
export function isEmptyArr(arr){
    return (arr && arr.length > 0)?false:true;
}