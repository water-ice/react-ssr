import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'
export default class PageCaseDetail extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            案例详情
          </title>
        </Helmet>
        <h1>这里是案例详情页面</h1>
      </main>
    )
  }
}