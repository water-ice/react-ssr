// 全部代理
const axios = require('axios');
const qs = require('query-string')
const baseUrl = 'http://cnodejs.org/api/v1';

module.exports = function(req,res,next){
    const path = req.path;
    const user = req.session.user || {};
    // 判断该接口是否需要用户登陆
    const needAccessToken = req.query.needAccessToken;
    // 如何是需要用户登陆，但是服务器中的session中没有accessToken的话，直接返回
    if(needAccessToken && user.accessToken) {
        res.status(401).send({
            success:false,
            msg:"need login"
        })
    }
    // 
    const getParam = Object.assign({},req.query,{
        accesstoken:(needAccessToken&& req.method === 'get')? user.accessToken: ''
    })
    const postParam = qs.stringify(Object.assign({},req.body,{
        accesstoken:(needAccessToken&& req.method === 'post')? user.accessToken: ''
    }))
    // 
    if(getParam.needAccessToken)  delete getParam.needAccessToken;
    // qs的作用：{'key':'value} => 'key'='value'
    // console.log(qs.stringify(Object.assign({},req.body,{
    //     accesstoken:(needAccessToken&& req.method === 'post')? user.accessToken: ''
    // })))
    // console.log(req.body,'body')
    // console.log(user,'user')
    console.log(req.session,'session')
    console.log(getParam);
    console.log(postParam)
    axios(`${baseUrl}${path}`, {
        method: req.method,
        params:getParam,
        data:postParam,
        headers: {
            'Content-type':'application/x-www-form-urlencoded'
        }
    })
    .then(resp => {
        console.log('a')
        if(resp.sttus == 200) {
            res.send(resp.data)
        }
        else {
            res.status(resp.status).send(resp.data)
        }
    })
    .catch(err => {
        console.log('b')
        if(err.response) {
            console.log(err.response.data)
            res.status(500).send(err.response.data)
        }
        else {
            res.status(501).send({
                success:false,
                msg:'未知错误'
            })
        }
    })
}