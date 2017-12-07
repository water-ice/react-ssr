import React from 'react';
import Helmet from 'react-helmet' 
export default class PageContest extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            所有赛事
          </title>
        </Helmet>
        <h1>这里是赛事页面23321</h1>
      </main>
    )
  }
}