import React from 'react';
import { Link } from 'react-router-dom'; 

import "@style/component_register.less"; 

import regexp from '@utils/regexp.js';
import countryCode from '@clientConfig/country_code';
import http from '@clientConfig/http';

import ComponentBackground from '@components/user/background'; 

class PageRegister extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "", // 姓名
			userNameHelp: "", // 姓名错误提示
			userNumber: "", // 手机号
			userNumberHelp: "", // 手机号错误提示
			userAbroadNumber: "", // 国外手机号码
			userAbroadNumberHelp: "", // 国外手机号码错误提示
			userPassword: "", // 密码
			userPasswordHelp: "", // 密码错误提示
			userCharacter: 1, // 用户角色：设计师(1), 企业(2) 
			userAgreest: false, // 用户是否同意精于协议
			agree: "", // 同意状态
			verifyNameStatus: false, // 验证用户名状态
			verifyNumberStatus: false, // 验证手机号状态
			verifyPasswordStatus: false, // 验证密码状态
			moduleStatus: false, // 手机验证码弹框显示的状态
			areaCodeDivStatus: false, // 区号div的显示状态
			index: null, // 区号的下标
			areaCode: "86", // 区号
			geetestHandler: "", // 极验证
		}
	}
  
 
  
	render() {
		  
		return (
			<div>
				注册
			 </div>
		)
	}
}

export default PageRegister;