// ejs模板引擎
const ejs = require('ejs');
// 页面title,meta等标签管理工具
const helmet = require('react-helmet').default;
// javascript序列化
const serialize = require('serialize-javascript')
// react服务器端渲染方法
const ReactSSR = require('react-dom/server')
// 配置
const Config = require('../config/index')

const axios = require('axios')
// 异步获取数据依赖
const asyncBootstrap = require('react-async-bootstrapper').default;

/**
 * 
 * @param {*} stores 
 */
const getStoreState = (stores) => {
    return Object.keys(stores).reduce((result, storeName) => {
      // console.log('result 和 storeName 是：---------------')
			// console.log(result)
			// console.log(storeName)
			// console.log(stores[storeName].toJson())  
      result[storeName] = stores[storeName].toJson()
      return result
    }, {})
}
 
/**
 * 
 * @param {编译后的js文件} bundle 
 * @param {编译后的页面模板} template 
 * @param {http请求} req 
 * @param {http响应} res 
 */ 
module.exports = (bundle, template, req, res) =>{ 
    // 创建全局的store
    const CreateGlobalStore = bundle.CreateStoreMap;
    // react渲染的根组件
    const CreateApp = bundle.default;
    // 默认路由的上下文
    const RouterContext = {}; 
    // store实例
    const stores =  CreateGlobalStore()

    // console.log('stores：-----------------')
    // console.log(stores)
    // console.log("[server/srr]:生成的stores如下：")
    // console.log(stores)
    // 编译react组件，生成项目代码。
    const app = CreateApp(stores,RouterContext,req.url)


    return new Promise((resolve, reject)=>{
        // 先执行项目代码，用来初始化获取数据
        asyncBootstrap(app)
        .then(()=>{
            // 获取到初始数据后，转化成字符串
            const AppString = ReactSSR.renderToString(app);
            // 服务器端处理redirect，路由跳转
            if( RouterContext.url){
                res.status(302).setHeader('Location', RouterContext.url);
                res.end();
                return;
            }            
            // 服务器端渲染后的初始数据，插入到html页面中
						const state = getStoreState(stores)
						// console.log("获取数据后的stores为-----------")
						// console.log(stores.ContestListStore.contestList)
            // 每个页面中传入的meta,title等信息
            const helmetContent = helmet.rewind();
            // console.log('state如下:----------------')
            // console.log(state)
            // ejs引擎解析生成的模板，并将相应的参数传入
            const html = ejs.render(template, {
                appString:AppString,
                initialState:serialize(state),
                title:helmetContent.title.toString(),
                meta:"<meta data-info='test' />",
                link:"<link data-info='test'/>",
                style:"<style data-info='test'></style>"
            })
            // 如果请求的request中，有access参数，直接返回渲染好的html页面
            if(req.cookies.access) { 
                res.send(html)
                resolve()    
            } 
            else {
                // 通过request的host判断当前域名
                let domain  =  Config.GetHostByRequest(req);
                let _ip = req.connection.remoteAddress; 
                // 获取初始的jwt
                axios({
                    url:domain+'/user/get_user_token',
                    method:"GET", 
                    headers:{
                        'appid':Config.appid,
                        'apptoken':Config.apptoken,
                        'ip':_ip  
                    }     
                })  
                .then((resp) =>{ 
                    if(resp.status == 200) {
                        if(resp.data.status == 1) {
                            res.cookie('access',resp.data.jwt)
                            res.send(html)
                            resolve()      
                        }  
                    }
                    else {
                        // 此处需要有监听报告
                        res.cookie('info','cannot get access');
                        res.send(html)
                        resolve()
                    } 
                })
                .catch(error => {
                    // 此处需要有监听报告
                    reject();
                })
            }
        })
        .catch(reject)
    })
}