const express = require('express');

const ReactSSR = require('react-dom/server');

const serverEntryFile = require('../dist/server_entry.js')

const app = express();

app.get("*",(req,res)=>{
    const appStr = ReactSSR.renderToString(serverEntryFile);
    res.send(appStr)
})
app.listen(3333,function(){
    console.log('success: server has running at localhost:3333')
})