const express = require('express');
const ReactSSR = require('react-dom/server');

// webpack执行webpack.server.conf配置，打包出来的供给服务器运行的js
const serverEntry = require('../dist/entry_server')

const app = express();


app.get("*",(req,res) =>{
  const AppString =   ReactSSR.renderToString(serverEntry);
  res.send(AppString);
})

app.listen(3333,()=>{
    console.log('server has running at localhost: 3333')
})