const fs= require('fs');
const path = require('path');
const axios = require('axios');
const webpack = require('webpack')
// 内存读取工具
const MemoryFs = require('memory-fs');
// 接口代理工具
const Proxy = require('http-proxy-middleware')

const Config = require('../config/index')
// dev server的时候是没有html页面的，所以使用axios去dev client下获取
/**
 * @function 从客户端服务器获取
 */
const getTemplateFromClient = () => {
    return new Promise((resolve,reject)=>{
        // 此处暂时是死路径，可以写成活的,文件命名由webpack.client.conf决定
        axios.get('http://localhost:8088/static/server.ejs')
        .then(res => {
            resolve(res.data)
        })
        .catch(reject)
    })
}

// 在这里启动一个webpack，获取webpack打包的结果



// 模块的构造方法，用来将从内存中读取到的字符串格式的js代码，转换成一个js模块
// const Module = module.constructor;

// 最终获得的内存中的bundle.js文件模块
let ServerBundleModule;

// 创建storeMap的方法，从entry_server中export出来的,和serverBundleModule一起赋值
let CreateStoreMapMethod = null;

// 由于生成的bundle文件中含有多个mobx实例，导致报错
// 再package.json中将项目中使用到的所有的依赖都分离到外部，所以再此处的bundleString是不含有任何依赖的
// 建立一个获取依赖的方法
// module.export 中的原生的模块
const NavtiveModule = require('module');
const vm = require('vm')
const getModuleFromString = (bundle, filename) => {
    const m = { exports:{}}
    const wrapper = NavtiveModule.wrap(bundle);

    const script = new vm.Script(wrapper,{
        filename,
        displayErrors:true,
    })
    const result = script.runInThisContext();
    result.call(m.exports,m.exports,require,m)
    return m;
}
// 获取webpack.server的配置
const serverConfig = require('../build/webpack.server.conf');
// webpack执行server的配置，生成一个compiler
const serverComplier = webpack(serverConfig);

// 内存读取工具
const mfs = new MemoryFs;
 
const SSRMethod = require('./ssr')
// 输出到内存中
serverComplier.outputFileSystem = mfs;
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
    // console.log(bundlePath)
    // 不要输出在硬盘，速度很慢，直接输出到内存中

    // 通过mfs读取path。获取到bundle的文件内存，需要制定utf-编码
    const bundleString = mfs.readFileSync(bundlePath,'utf-8')
    // 新建一个js模块
    const emptyModule = getModuleFromString(bundleString,'server-entry.js')
    // console.log(emptyModule)
 
    // 将解析后的js模块，赋值给外面的变量使用
    ServerBundleModule = emptyModule.exports
})


module.exports = function(app) {

    app.use('/static',Proxy({
        target:"http://localhost:8088"
    }))

    app.get("*",function(req,res,next)
    {
        // 获取到客户端服务器的模板
        getTemplateFromClient()
        .then(template => {
            // console.log("[dev-server]:打包出来后的js文件："+ServerBundleModule)
            return SSRMethod(ServerBundleModule,template,req,res)
        })
        .catch(next)
    })
    
    app.listen(Config.port.develop,(err)=>{
        if(err) throw err;
        console.log('server has running at localhost:'+Config.port.develop)
    })
}