const axios = require('axios');
const Config = require('./index')

/**
 * @function 接口请求方法
 * @param url 请求连接
 * @param params 请求参数
 * @param method 请求方式
 */
const ajax = (url,method,params,headers) => { 


    return new Promise((resolve,reject)=>{
        axios(url, {
            method:method,
            params:params, 
            headers:headers
        })
        .then(response => {
            // console.log("当前Ajax发送请求返回状态码为:"+response.status)
            // console.log("接口为：" +url)

            resolve(response)
        })
        .catch(err =>{
            console.log('ajax错误拦截:')
            // console.log(url);
            // console.log(method)
            // console.log(err)
            reject(err)
        })
    
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