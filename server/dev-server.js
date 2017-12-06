const fs= require('fs');
const ejs = require('ejs');
const path = require('path');
const axios = require('axios');
const webpack = require('webpack')
const MemoryFs = require('memory-fs');
const ReactSSR = require('react-dom/server')
const Proxy = require('http-proxy-middleware')
const serialize = require('serialize-javascript')
// 异步获取数据依赖
const asyncBootstrap = require('react-async-bootstrapper').default;
// dev server的时候是没有html页面的，所以使用axios去dev client下获取
const getTemplateFromClient = () => {
    return new Promise((resolve,reject)=>{
        // 此处暂时是死路径，可以写成活的,文件命名由webpack.client.conf决定
        axios.get('http://localhost:8088/public/server.ejs')
        .then(res => {
            resolve(res.data)
        })
        .catch(reject)
    })
}

// 在这里启动一个webpack，获取webpack打包的结果

// 获取webpack.server的配置
const serverConfig = require('../build/webpack.server.conf');
// webpack执行server的配置，生成一个compiler
const serverComplier = webpack(serverConfig);

// 内存读取工具
const mfs = new MemoryFs;

// 输出到内存中
serverComplier.outputFileSystem = mfs;

// 模块的构造方法，用来将从内存中读取到的字符串格式的js代码，转换成一个js模块
const Module = module.constructor;

// 最终获得的内存中的bundle.js文件模块
let ServerBundleModule;

// 创建storeMap的方法，从entry_server中export出来的,和serverBundleModule一起赋值
let CreateStoreMap ;

// compiler监听文件的变动，生成新的bundle文件
serverComplier.watch({}, (err,stats) => {
    if(err) throw err;
    stats = stats.toJson();
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(warning => console.warn(warning))

    // 获取bundle文件路径
    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )
    // 不要输出在硬盘，速度很慢，直接输出到内存中

    // 通过mfs读取path。获取到bundle的文件内存，需要制定utf-编码
    const bundleString = mfs.readFileSync(bundlePath,'utf-8')

    // 新建一个js模块
    const emptyModule = new Module();
    // js模块解析bundle的字符串，需要指定文件名
    emptyModule._compile(bundleString,'server-entry.js')
    // console.log(emptyModule.exports)
    // 将解析后的js模块，赋值给外面的变量使用
    ServerBundleModule = emptyModule.exports.default;
    // 获取到createStoreMap 方法
    CreateStoreMap = emptyModule.exports.createStoreMap
})

const getStoreState = (stores) => {
    return Object.keys(stores).reduce((result,storeName)=>{
        result[storeName] = stores[storeName].toJson()
        return result;
    },{})
}

module.exports = function(app) {

    app.use('/public',Proxy({
        target:"http://localhost:8088"
    }))

    app.get("*",function(req,res){
        // 先获取到template
        getTemplateFromClient().then(template => {

            const RouterContext = {};
            // console.log(CreateStoreMap)
            const stores =  CreateStoreMap()
            // console.log(ServerBundleModule)
            const app = ServerBundleModule(stores,RouterContext,req.url)

            asyncBootstrap(app).then(()=>{
                // 再获取到js模块
                const content = ReactSSR.renderToString(app);
                // 服务器端处理redirect，路由跳转
                if( RouterContext.url){
                    res.status(302).setHeader('Location', RouterContext.url);
                    res.end();
                    return;
                }            
                // 服务器端渲染后的数据
                const state = getStoreState(stores)
                console.log(stores.demoState)
                console.log(state)
                const html = ejs.render(template, {
                    appString:content,
                    initialState:serialize(state)
                })
                res.send(html)
            })
        }).then(err => {
            // 监听获取模板的错误
            // console.log(err)
        })
    })
    app.listen(3333,(err)=>{
        if(err) throw err;
        console.log('server has running at localhost:3333')
    })
}