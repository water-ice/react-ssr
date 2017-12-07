import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'
export default class PageCooperation extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            商务合作
          </title>
        </Helmet>
        <h1>这里是商务合作页面</h1>
      </main>
    )
  }
}