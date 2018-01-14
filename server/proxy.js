// 全部代理  
const http = require('../config/http')
const Config = require('../config/index');
const base64 = require('../config/base64')
const tokenIntercept =[
    '/v1/login/loginEmail',
    '/v1/login/loginMobile',
    '/v1/login/loginMobileCode',
    '/v1/login/refreshToken',
    '/v1/login/loginOut',
    '/v1/register/register',
    '/v1/Social_Login/bindCheck',
    '/v1/user/bindMobileCodeUser',
    '/v1/user/bindMobileUser',
    '/v1/user/bindEmailUser',
    '/v1/user/register'
]
module.exports = function(req,res,next){ 
    console.log(req.path)
    let realPath =  req.path.replace('/api','');
    let wholePath = Config.getDomain()+realPath;
    // 根据请求的api路径决定是否需要拦截
    const isIntercept = (tokenIntercept.indexOf(realPath) > 0)?true:false; 
    const headers = req.headers;
    // 获取到cookie中的token，不存在则为空
    const userToken = req.cookies.token || '';  
    // console.log('是否为拦截接口'+isIntercept);
    // console.log('基础路径为：'+req.path);
    // console.log("转发路径为："+realPath);
    // console.log("完整路径为："+wholePath) 
    http.ajax(wholePath,req.method,req.body,req.params,{
        token:userToken,
    })  
    .then(resp => {   
        if(resp.status == 200) {
            // console.log(isIntercept,resp.data.status,userToken)
            // 拦截用户操作，用以存储或清除cookie
            if(isIntercept && resp.data.status == 1) {
                // console.log(res.cookies)
                // 退出清cookie
                if(realPath == '/v1/login/loginOut') {
                    res.clearCookie('token')
                }
                else {
                    // 登录或注册存cookie，只读
                    // 截取出来token中间一段内容
                    const requiredToken = resp.data.result.token.split('.')[1];
                    // 解密
                    const decodeToken = base64.decode(requiredToken)
                    // 将base64解析出来的token转化为对象
                    const tokenObj = JSON.parse(decodeToken);
                    // 设置cookie
                    res.cookie('token',resp.data.result.token,{
                        expires: new Date(tokenObj.exp*1000),
                        httpOnly:true,
                    })
                }
            } 
            res.status(resp.status).send(resp.data)
        }
        else {
            res.status(resp.status).send(resp.data)
        }
    })
    .catch(err => {
        console.log('【proxy代理报错】')
        console.log(err)
        if(err.response) {
            res.status(err.response.status).send(err.response.data)
        }
        else {
            res.status(501).send({
                success:false,
                msg:'【proxy代理报错】未知错误'
            })
        }
    })
}