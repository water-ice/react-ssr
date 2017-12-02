/**
 * 
 * @function 开发时的服务器端渲染 
 *  
 */ 
const webpack = require('webpack');
const axios = require('axios');
const path = require('path');
const MemoryFs = require('memory-fs');
const ReactSSR = require('react-dom/server')
const Proxy = require('http-proxy-middleware')
// 浏览器环境webpack配置
const ClientWebpackConfig = require('../../build/webpack.client.conf');
// 服务器环境webpack配置
const ServerWebpackConfig = require('../../build/webpack.server.conf')
// console.log(ClientWebpackConfig)

const ClientServerHost = "http://localhost:"+ClientWebpackConfig.devServer.port;
console.log(ClientServerHost)
const Mfs = new MemoryFs;

const ServerComplier = webpack(ServerWebpackConfig)

// 从Mfs中读取文件
ServerComplier.outputFileSystem = Mfs;

// 模块构造器
const Module = module.constructor;

// 服务器端渲染的bundlefile的内容
let ServerBundleFile ;

ServerComplier.watch({}, (err, stats) => {
  if(err) throw err;
  // stats为webpack输出信息配置
  stats = stats.toJson();
  // error和warning都进行通知
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.error(warn))

  // 获取打包出来的文件的完整路径，此处文件存储在内存中，并不是在硬盘
  const BundlePath =  path.join(
    ServerWebpackConfig.output.path,
    ServerWebpackConfig.output.filename
  )
  // 使用memory-fs从内存中读取出来的字符串
  const BundleMemoryFile = Mfs.readFileSync(BundlePath,'utf-8')

  // 新建一个模块
  var NewModule = new Module();
  // 使用module解析字符串
  NewModule._compile(BundleMemoryFile,'dev-server.js');

  ServerBundleFile  = NewModule.exports.default;  
})
/**
 * 
 * @function 获取存储在内存中的template文件
 * @returns 通过ajax获取webpack-dev-server的客户端服务器html页面
 */
const GetTemplate = () => {
  return new Promise((resolve,reject)=>{
    axios.get(ClientServerHost+'/public/index.html') 
    .then(response => {
      resolve(response.data)
    })
    .catch(reject)
  })
}

/**
 * 
 * @function 获取到webpack打包后的资源文件
 */
module.exports = function(app){
  app.use('/public',Proxy({
    target:ClientServerHost
  }))

  app.get("*",(request,response)=>{
     GetTemplate()
     .then(template => {
       const Content = ReactSSR.renderToString(ServerBundleFile);
       response.send(template.replace('<!--app-->',Content))
     })
     .catch((err)=>{
        console.log(err)
     })
  })
}