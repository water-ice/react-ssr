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


### nodemon
修改服务器端文件，不需要重新服务

### 笔记

*  开发环境逻辑

client端

webpack-dev-server -> webpack.client.conf.js(此处有dev环境的判断，添加配置项) -> 在内存生成代码(app.js,index.html) -> 客户端开发服务器(8088)

server 端

node start.js -> dev-server.js(实际执行) -> 获取html文件(通过axios前往客户端开发服务器获取) -> 获取资源文件(所有的资源文件通过http-proxy代理到客户端开发服务器) -> ReactDomServerRender(资源文件) ->添加到html文件 -> 服务器端服务器(3306) 
                                        
