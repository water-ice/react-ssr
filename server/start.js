const fs = require('fs');
const path = require('path');
const express = require('express');
const ReactSSR = require('react-dom/server');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser')
const session = require('express-session')
const ServerRender = require('./utils/server-render')
const app = express();
const port = 3333;

const IsDev = process.env.NODE_ENV === 'develop';

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(favicon(path.join(__dirname,'../favicon.ico')))

// app.use(session({
// 	maxAge:10 * 60 * 1000,
// 	name: "tid",
// 	resave: false,
// 	saveUninitialized:false,
// 	secret: "wd"
// }))


app.use('/user/login',require('./utils/handle_login'))

app.use('/api',require('./utils/proxy'))

if(!IsDev) {
  /**
   * build构建执行代码
   */
  const ServerEntry = require('../dist/entry_server').default;
  const template = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf8')
  
  // 静态资源
  app.use('/public',express.static(path.join(__dirname,'../dist')))

  app.get("*",(request,response,next)=>{
    // 使用ReactDOM
    const AppString = ReactSSR.renderToString(ServerEntry);
    
    response.send(template.replace('<!-- app -->',AppString))
  })
}
else {
  const DevelopServer = require('./utils/dev-server')
  DevelopServer(app)
}

app.listen(port,(err)=>{
  if(err) throw err;
  console.log('server has running at '+port)
})