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