import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'
export default class PagePressDetail extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            报道文章详情页
          </title>
        </Helmet>
        <h1>这里是报道文章详情页</h1>
      </main>
    )
  }
}