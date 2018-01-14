/**
 * 字符串工具方法
 * @author 王磊
 * @date 2017/12/13
 */ 

/**
 * @method 去除字符串前后空格
 * @param {String} str 参数字符串
 * @returns {String} 去除前后空格的字符串
 */ 
export function trim (str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @method 符号替换字符
 * @param { String } str      替换字符串
 * @param { Number } start    替换起始位置
 * @param { Number } length   替换长度
 * @param { String } symbol   替换成为的内容，默认为*
 * @example replaceSymbol('15929485111',3,4,'*') => 159****5111
 */ 
export function replaceSymbol(str,start,length,symbol){
    const regexpStr = '([\\w\\W]{'+start+'})'+'([\\w\\W]{'+length+'})'+'(.*?)';
    const regexp = new RegExp(regexpStr);
    // 此处应该有优化
    let symbolStr = '';
    for(let i =0;i<length;i++) {
        symbolStr += Symbol;
    } 
    return str.replace(regexp,"$1"+symbolStr+"$3")
}

/**
 * 获取usearch上的参数
 * @param { String } search 路由的search值
 * @param { String } key 想要获取的参数
 * @example getSearchParam(this.props.location.search,'type') => 1
 * search的传递：this.props.history.push({pathname:"/index",search:"&a=1&b=2"})
 */
export function getSearchParam(search,key){
    // 去掉前面默认的问号
    let params = search.replace('?','')
    const regexp = RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    const values = params.match(regexp);
    return values[2]||null;
}