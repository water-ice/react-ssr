const axios = require('axios');
const Config = require('./index')
/**
 * @function 接口请求方法
 * @param url 请求连接
 * @param params 请求参数
 * @param method 请求方式
 */
const ajax = (url,method,params) => {
    return new Promise((resolve,reject)=>{
        axios(url, {
            method,
            params, 
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            // console.log("当前Ajax发送请求返回状态码为:"+response.status)
            resolve(response)
        })
        .catch(reject)
    
    })
}
module.exports = {
    ajax,
    get(url,params){
        return ajax(url,'GET',params)
    },
    post(url,params){
        return ajax(url,'POST',params)
    }
}