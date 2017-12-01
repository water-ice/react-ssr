import axios from 'axios';
import qs from 'qs';

import domain from '@config/domain';
import storage from './storage';

const env = process.env.NODE_ENV
const apiDomain = domain['test']
/**
 * @see 此处无法获取到process.evn.NODE_ENV，暂时使用test代替
 */

 /**
 * @设置HTTP请求，符合JWT规范的userinfo与sessionId，此处需要服务器端开启接受header中的'authkey'与'sessionId'属性
 */ 
// axios.defaults.headers.common['authKey'] = storage.get('userInfo') ? storage.get('userInfo').authKey : 0;
// axios.defaults.headers.common['sessionId'] = storage.get('userInfo') ? storage.get('userInfo').sessionId : 0;


/**
 * @function http请求接口分装
 * @param url 请求接口路径 
 * @param param 请求参数
 * @example http.get('/get_all_contest',{type:1}).then().catch()
 */
const config = {
    withCredentials:true
}
const http = {
    post(url,param){
        // console.log(url)
        url= apiDomain + url;
        return new Promise((resolve,reject)=>{
            axios
            .post(url,param,config)
            .then(
                (response)=>{
                    resolve(response.data);
                },
                (error)=>{
                    reject(error)
                }
            )
        })
    },
    get(url,param){
        url= apiDomain + url
        console.log(url)
        return new Promise((resolve,reject)=>{
            axios.get(url,param,config).then(
                (response)=>{
                    resolve(response.data);
                },
                (error)=>{
                    reject(error)
                }
            )
        })
    }
}
export default http;