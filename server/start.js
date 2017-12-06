const fs = require('fs');
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const ReactSSR = require('react-dom/server');

// 接口代理
const bodyParse = require('body-parser')
const session = require('express-session');
// 环境变量
const isDev = process.env.NODE_ENV === 'develop';


const app = express();

// application/json -> req.body
app.use(bodyParse.json())

// post请求也转化为req.body
app.use(bodyParse.urlencoded({ extended:false}))

// resave：每次请求是否重新生成session
app.use(session({
    maxAge: 10 * 60 * 1000,
    name: 'testid',
    resave: false,
    saveUninitialized:false,
    secret:"test secret"
}))

// 浏览器上面的icon
app.use(favicon(path.join(__dirname,'../favicon.ico')))

// api拦截
app.use('/api/user',require('./login-proxy'))
app.use('/api',require('./proxy'))

if(isDev) {
    // 开发环境
    const devServer = require('./dev-server');
    devServer(app)
}
else {
    // 生产环境
    
    // client/entry_server.js使用webpack打包后的，供给服务器渲染的react组件
    const serverEntryFile = require('../dist/server_entry.js').default;
    // client/index.html打包出来的页面
    const serverTemplate = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8')
    // 所有以public开头的请求，都以静态资源的形式返回
    app.use('/public',express.static(path.join(__dirname,'../dist')))
    // 所有请求都进入这里
    app.get("*",(req,res)=>{
        // 服务器端渲染号的react组件
        const appString = ReactSSR.renderToString(serverEntryFile);
        // 插入模板并返回
        res.send(serverTemplate.replace('<!--app-->'),appString)
    })
    app.listen(3333,function(){
        console.log('success: server has running at localhost:3333')
    })    
}
