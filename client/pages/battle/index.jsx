import React from 'react';
import Helmet from 'react-helmet' 
import '@style/page-battle.less'

import { observer, inject } from 'mobx-react'

@inject("battleState") @observer

export default class PageContest extends React.Component {
  constructor(props){
    super(props)
  }
  asyncBootstrap() {    
    return this.props.battleState.GetBattleList()
    .then(()=>{
      return true;
    }) 
    .catch(()=>{
      return false;
    })
  }  
  DeleteBattle(){
    this.props.battleState.DeleteBattleList()
  }
  componentDidMount(){
    this.props.battleState.GetBattleList()
  }
  render(){ 
    return(
      <main className="page-battle">
        <Helmet>
          <title>
            所有赛事
          </title>
        </Helmet>
        <button onClick={this.DeleteBattle.bind(this)}>删除一个</button>
        <ul>
          {
            this.props.battleState.BattleList.map(item=>(
              <li key={item.id}>
                <p>{item.title}</p>
              </li>
            ))
          }
        </ul>
      </main>
    )
  }
}