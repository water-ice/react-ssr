import React from 'react'; 
import ComponentRegister from '@components/register'
export default class PageRegister extends React.Component {
  constructor(props){
    super(props) 
  }
  render(){
    return(
      <div>
        <ComponentRegister />
      </div>
    )
  }
}