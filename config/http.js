const axios = require('axios');
const Config = require('./index')
const qs = require('query-string')
/**
 * @function 接口请求方法
 * @param url 请求连接
 * @param data 请求参数
 * @param method 请求方式
 */
axios.interceptors.request.use(function (config) {
    // console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

let ApiDomain = Config.getDomain()
const ajax = (realPath,method,data,params,headers) => {    
    return new Promise((resolve,reject)=>{
        axios({
            url:realPath,
            method:method,
            data:data, 
            params:params,
            headers:headers,
        })
        .then(response => {
            // console.log("当前Ajax发送请求返回状态码为:"+response.status)
            // console.log("接口为：" +url)
            // console.log('【http接口返回值】')
            // console.log(response.data)
                resolve(response)  
        })
        .catch(err =>{
            console.log('【http.js报错】')
            console.log(err)
            console.log(realPath);
            console.log(method)
            console.log(headers)
            console.log(data)
            reject(err)
        })
    
    })
}
module.exports = {
    ajax,
    get(url,data,params,headers = {}){
        return ajax(url,'GET',data,headers)
    },
    post(url,data,params,headers = {}){
        return ajax(url,'POST',data,headers)
    },
    upload(url,data,params,progress){
        let path = url.replace('/api','')
        return new Promise((resolve,reject) =>{
            axios({
                url:`${Config.getDomain()}${path}`,
                data:data,
                method:"POST",
                params:params,
                onUploadProgress(progressEvent){
                    let current = progressEvent.loaded/progressEvent.total;
                    progress(current.toFixed(2))
                }
            })
            .then(response => {
                resolve(response.data)
            })
            .catch(error =>{
                console.log('----------上传接口错误-------------')
                console.log(error)
                console.log('----------上传接口错误-------------')
                reject(error)
            })
    
        })
    }
}