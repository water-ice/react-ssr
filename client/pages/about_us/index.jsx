import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'
export default class PageContest extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            关于我们
          </title>
        </Helmet>
        <h1>关于精于页面</h1>
      </main>
    )
  }
}