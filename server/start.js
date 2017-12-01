const fs = require('fs');
const path = require('path');
const express = require('express');
const ReactSSR = require('react-dom/server');
const ServerEntry = require('../dist/entry_server').default;

const app = express();
const port = 3012;
const template = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf8')

// 静态资源
app.use('/public',express.static(path.join(__dirname,'../dist')))

app.get("*",(request,response)=>{
  const AppString = ReactSSR.renderToString(ServerEntry);
  response.send(template.replace('<app></app>',AppString))
})

app.listen(port,(err)=>{
  if(err) throw err;
  console.log('server has running at '+port)
})