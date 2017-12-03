import { combineReducers } from 'redux';
import InitialState from './store'; 

const USER_STATE = (state = InitialState.user, action) =>{
  switch(action.type) {
    case "SaveUserInfo":{
      console.log(action.state,1);
      return action.state;
    };
    break;
    case "ClearUserInfo":{ 
      return InitialState.user;
    };
    break;    
		default:
      return state;
    break;    
  }
}

const Reduers = combineReducers({
  USER_STATE
})

export default Reduers;