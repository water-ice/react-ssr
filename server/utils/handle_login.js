const Router = require('express').Router();
const axios = require('axios');

const baseURL = 'http://php.wangeriu.org/login';

Router.post('/user/login',(req,res)=>{
	axios.post(`${baseURL}`,{

	}).then(response => {
		if(response.status == 200 && response.data.success) {
			
		}
	})
})

module.exports = Router;