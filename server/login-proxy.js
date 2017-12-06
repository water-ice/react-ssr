const Router = require('express').Router();

const axios = require('axios'); 
const baseUrl = 'http://cnodejs.org/api/v1';
Router.post('/login',(req,res)=>{
    axios.post(`${baseUrl}/accesstoken`, {
        accesstoken:req.body.accessToken
    })
    .then(resp => {
        console.log(1)
        if(resp.status == 200 && resp.data.success) {
            // 设置seccsion
            req.session.user = {
                accessToken: req.body.accessToken,
                loginName:resp.data.loginName,
                id:resp.data.id,
                avatarUrl:resp.data.avatarUrl
            }
            res.json({
                success:true,
                data:resp.data
            })
            console.log(req.session)
        }
    })
    .catch(err =>{
        console.log(2)
        // 有返回信息
        if(err.response) {
            res.json({
                success:false,
                data:err.response.data
            })
        }
        else {
            next(err)
        }
    })
})

module.exports = Router;