const fs = require('fs');
const path = require('path');
const express = require('express');
// 网站favicon处理
const favicon = require('serve-favicon');
// 接口数据转化到res.body上
const bodyParse = require('body-parser')
// 代理方法
const proxy = require('express-http-proxy');


// 服务器端渲染方法
const SSR = require('./ssr')
// 项目配置如:端口号，环境变量等
const Config = require('../config/index')
// gzip
const compression = require('compression')
// cookie解析
const cookieParser = require('cookie-parser');

// session
const session = require('express-session')

// express实例
const app = express();

// 开gzip
app.use(compression())

// 开cookie解析 
app.use(cookieParser('1'));

// 开session
app.use(session({ 
    name:"sid",
    secret:"1",
    resave: false,
    saveUninitialized:true,
    cookie: {        
        maxAge:1000 * 60 * 5,
    }
}));
// application/json -> req.body
app.use(bodyParse.json())

// post请求也转化为req.body
app.use(bodyParse.urlencoded({ extended:false}))

// 返回浏览器标题栏icon
app.use(favicon(path.join(__dirname,'../favicon.ico')))

app.use('/api/user',proxy(Config.getDomain(),{
    // node发送给server之前拦截path
    proxyReqPathResolver(req){
        return req.path.replace('/api/user','')
    }, 
    // node发送给server之前拦截header，加token
    proxyReqOptDecorator(proxyReqOpts, srcReq){
        proxyReqOpts.headers['token'] = srcReq.session.token || '';
        return proxyReqOpts;
    },
    // node返回给client之前拦截
    userResDecorator(proxyRes,proxyResData,req,res){
        const data = JSON.parse(proxyResData.toString('utf8')); 
        const realPath = req.path;
        console.log(data)
        // console.log(data)
        if(realPath == '/user/register') { 
            req.session.token = data.info.token || '';
        }
        if(realPath == '/user/getUserInfo') { 
            req.session.user = data || {}
        }
        if(realPath == '/user/logout') {
            delete req.session.user 
            delete req.session.token 
        }
        return JSON.stringify(data);
    }
}))

app.use('/api',proxy(Config.getDomain(),{
    proxyReqPathResolver(req){ 
        return req.path.replace('/api','')
    } 
}))

// // 用户接口拦截
// app.use('/api/user',require('./proxy-user'))

// // api拦截
// app.use('/api',require('./proxy'))

if(Config.isDev) {
    // 开发环境
    const devServer = require('./dev-server');
    devServer(app)
}
else {
    // 生产环境
    
    // client/entry_server.js使用webpack打包后的，供给服务器渲染的react组件
    const serverEntryFile = require(path.resolve(__dirname,'../dist/server_entry.js'));
    // client/index.html打包出来的页面
    const serverTemplate = fs.readFileSync(path.join(__dirname,'../dist/server.ejs'),'utf-8')
    // 所有以public开头的请求，都以静态资源的形式返回
    app.use('/static',express.static(path.join(__dirname,'../dist')))

    // 所有请求都进入这里
    app.get("*",(req,res,next)=>{
        // 交付给服务器端渲染方法
        SSR(serverEntryFile,serverTemplate,req,res)
        .catch(next)

    })
    app.listen(Config.port.product,function(){
        console.log('服务器已经启动成功！端口号:'+Config.port.product)
    })    
}
// 全局的错误处理机制
app.use(function(err,req,res,next){
    console.log("全局的信息错误处理："+err);
    res.status(500).send(err)
})
