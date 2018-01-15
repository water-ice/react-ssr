import React from 'react';
import { Link,NavLink} from 'react-router-dom'; 
import { inject , observer} from 'mobx-react';

import '@style/component_header.less';

import http from '@clientConfig/http';
import Storage from '@utils/storage'

@inject((stores)=>{
  return {
      UserStore:stores.UserStore
  }
}) @observer

export default class ComponentHeader extends React.Component {
  constructor(props) {
    super(props)
  } 
  Logout(){
    http.post('/api/v1/login/loginOut')
    .then(response => { 
      if(response.data.status == 1) {
        this.props.UserStore.clearUserInfo();
        Storage.clear('user')
        this.props.history.push('/user')
      }
      else {
        alert(response.data.message.errorMsg)
      }
    })
  }
  goUser(method){
    this.props.history.push({
        pathname:'/user',
        query:{
            method
        }
    })
}  
  render(){ 
    return (
      <header className="component-header">
       header1
      </header>
    )
  }
}