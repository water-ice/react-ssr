import React from 'react';
import Helmet from 'react-helmet'
import '@style/page-battle.less'
export default class PagePress extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            媒体报道
          </title>
        </Helmet>
        <h1>媒体报道列表</h1>
      </main>
    )
  }
}