
const base64 = require('@serverConfig/base64');
/**
 * 获取Cookie
 * @param { String } key 
 * @returns { Object | String | Number | Boolean } 看存的什么了
 * @example Cookie.get('user') => {"uid":"123","email":"example@email.com","mobile":"123456789"}
 */ 
function get(key){
    // 匹配正则表达式
    const regexp = new RegExp("(^| )" + base64.encode(key) + "=([^;]*)(;|$)");
    // 通过正则匹配获取到匹配结果
    const valueTotal = document.cookie.match(regexp);
    if(valueTotal) {
        const valueStr = valueTotal[2]
        // 使用base64解密
        const decodeStr = base64.decode(valueStr)
        // 使用decodeURIComponent解密
        const unserializeValue = decodeURIComponent(decodeStr);
        // 使用JSON.parse转换为对象
        const valueObj = JSON.parse(unserializeValue);
        // 返回
        return valueObj 
    }
    else {
        return null;
    }
}
/**
 * 
 * @param { String } key 设置Cookie的键名 
 * @param { Object | String | Number | Boolean} value 设置Cookie的键值
 * @param { Number } expires 过期时间，单位秒
 * @example Cookie.set('user',{id:"123",name:"234"},60*60) 一小时后，cookie中的user过期 
 */ 
function set(key,value,expires){
    // 获取当前时间
    const now = new Date().getTime();
    // 根据当前时间，计算过期时间
    const expiresDate = new Date(now+expires*1000);
    // 使用JSON.stringify转化为字符串
    const valueStr = JSON.stringify(value);
    // encoeURLComponent加密
    const serializeValue = encodeURIComponent(valueStr);
    console.log(serializeValue)
    // 进行base64加密
    const encodeValue = base64.encode(serializeValue);
    console.log(encodeValue)
    // 设置
    document.cookie = base64.encode(key)+"="+encodeValue+";path=/;domain="+document.domain+";expires="+expiresDate.toGMTString();
}
/**
 * 清除某Cookie
 * @param { String } key 
 * @example Cookie.clear('user')
 */
function clear(key){
    set(key,'',1)
}
export default {
    get,
    set,
    clear,
}