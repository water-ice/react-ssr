// 全部代理  
const http = require('../config/http')
const Config = require('../config/index');
const base64 = require('../config/base64');

module.exports = function(req,res,next){  
    let realPath =  req.path.replace('/api/user','');
    let wholePath = Config.getDomain()+realPath;  
    http.ajax(wholePath,req.method,req.body,req.params,{
        token:req.session.token || ''
    })  
    .then(response => {    
        console.log('当前请求url为：'+req.path);
        console.log('服务器返回值为：'+response.data.status);
        if(response.status == 200 && response.data.status == 1) {
            if(realPath == '/user/register') {
                // 注册成功
                console.log('设置session成功')
                req.session.token = response.data.info.token;
                console.log(req.session)
            }
            if(realPath == '/user/getUserInfo') {
                console.log('用户信息session设置成功')
                req.session.user = response.data
                console.log(req.session)
            }
        }
        res.status(response.status).send(response.data.info)
    })
    .catch(err => {
        console.log('【proxy-user代理报错】')
        console.log(err)
        if(err.response) {
            res.status(err.response.status).send(err.response.data)
        }
        else {
            res.status(501).send({
                success:false,
                msg:'【proxy-user代理报错】未知错误'
            })
        }
    })
}