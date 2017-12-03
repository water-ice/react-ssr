import React from 'react';
import { connect } from 'react-redux';

class PageRegister extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mobile:"",
      name:"",
      password:""
    }
  }
  BindMobile(event){
    this.setState({
      mobile:event.target.value
    })
  }
  BindName(event){
    this.setState({
      name:event.target.value
    })
  }  
  BindPassword(event){
    this.setState({
      password:event.target.value
    })
  }
  componentWillMount(){
  }
  Register(){ 
    const UserState ={
      name:this.state.name,
      mobile:this.state.mobile,
    }
    console.log(UserState)
    this.props.dispatch({
      type:'SaveUserInfo',
      state:UserState
    })
  }
  render(){
    return(
      <main  style={{"background":"#CD69C9","height":"500px","textAlign":"center"}}>
        <input onChange={this.BindMobile.bind(this)} type="text" placeholder="手机"/>
        <br />
        <input onChange={this.BindName.bind(this)} type="text" placeholder="姓名" />
        <br />
        <input onChange={this.BindPassword.bind(this)} type="password" placeholder="密码" />
        <br />
        <input onClick={this.Register.bind(this)} type="button" value="注册" />
      </main>
    )
  }
}
const getUserInfoFromRedux = state => {
  return {
    user:state.USER_STATE
  }
}
export default connect(getUserInfoFromRedux)(PageRegister)