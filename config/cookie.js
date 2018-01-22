/**
 * 服务器端设置获取cookie方法
 */


/**
 * 获取请求头中的cookie
 * @param request   请求头
 * @param key       cookie键名
 */  
function getCookie(request,key){
    if(!request) return '';
    if(!request.headers) return '';
    if(!request.headers.cookie) return '';
    if(!key) return '';

    const cookie = request.headers.cookie;
    const keyExp = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
    const value = cookie.match(keyExp);
    if(!value) return '';
    if(!value[2]) return ''; 
    return value[2];
}

function setCookie(){

}

module.exports = {
    get:getCookie,
    set:setCookie,
}