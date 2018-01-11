const axios = require('axios'); 
const qs = require('query-string')
/**
 * @function 接口请求方法
 * @param url 相对路径链接：/api/login/loginMobile
 * @param data 请求参数
 * @param parmas 请求参数
 * @param method 请求方式
 * @explain 客户端http请求方法
 */
axios.interceptors.request.use(function (config) {
    // console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
 
const ajax = (relativePath,method,data,headers) => {    
    return new Promise((resolve,reject)=>{
        axios({
            url:relativePath,
            method:method,
            data:data, 
            headers:headers,
        })
        .then(response => { 
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
    get(url,data,headers = {}){
        return ajax(url,'GET',data,headers)
    },
    post(url,data,headers = {}){
        return ajax(url,'POST',data,headers)
    },
    upload(relativePath,data,params,progress){ 
        return new Promise((resolve,reject) =>{
            axios({
                url:relativePath,
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