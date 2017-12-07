### hot-module-replacement

不刷新页面，更新组件


## 坑
```
getaddrinfo ENOTFOUND undefined undefined:80
是因为dns找不到域名导致的
```

## 逻辑分析

npm run dev:server 之前应该先npm run build:server出代码


### eslint
"lint": "eslint --ext .js --ext .jsx src/",
"precommit": "npm run lint"
      {
        // 在代码编译之前先进行eslint
        enforce:"pre",
        test:/.(js|jsx)/,
        loader:"eslint-loader",
        exclude:[
          path.resolve(__dirname,'../node_modules')
        ]
      },

### editorconfig

### mobx

官网:mobx.js.org
支持mobx
babel-plugin-transform-decorators-legacy


### nodemon
修改服务器端文件，不需要重新服务

### 服务端渲染需要解决的问题

1. 路由
2. store
3. 避免重复渲染
4. 

### 笔记

*  开发环境逻辑

client端

webpack-dev-server -> webpack.client.conf.js(此处有dev环境的判断，添加配置项) -> 在内存生成代码(app.js,index.html) -> 客户端开发服务器(8088)

server 端

node start.js -> dev-server.js(实际执行) -> 获取html文件(通过axios前往客户端开发服务器获取) -> 获取资源文件(所有的资源文件通过http-proxy代理到客户端开发服务器) -> ReactDomServerRender(资源文件) ->添加到html文件 -> 服务器端服务器(3306) 
                                        
### 目录结构

```
client
  config 第三类库的引用及配置,如router等
  pages 页面文件,如index，battle,
  store 存放项目store相关的文件
  components: 非业务组件或多个业务间都需要用到的公用组件如dropdown,header,footer

```

### 模块划分
