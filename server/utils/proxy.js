const axios = require('axios');
const baseUrl = 'http://php.wangerniu.org';

module.exports = function (req,res){
	// 接口地址
	const path = req.path;

	// 此处需要判断权限

	axios(`${baseUrl}${path}`,{
		method:req.method,
		params:{
			info:'test send info',
			data:{
				'user':"test user"
			}
		},
		headers: {
			'Content-type':"application/x-www-form-urlencode"
		}
	})
	.then(responsse => {
		if(response.status == 200) {
			res.send(response.data)
		}
		else {
			res.status(response.status).send(response.data)
		}
	})
	.catch(err => {
		if(err.response) {
			res.status(502).send(err.response.data)
		}
		else {
			res.status(502).send({
				success:false,
				msg:"未知错误"
			})
		}
	})
}