import { SaveUserInfo } from '../actions/userinfo'
import { combineReducers } from 'redux';
import Storage from '@utils/storage'
import userStore from '../store/userinfo';

const user = (state = userStore,action) =>{
	switch (action.type) {
		case 'SaveUserInfo':  
			Storage.set({
				user:action.state
			})
			return action.state;
			break;
		case 'ClearUserInfo':  
			Storage.set({
				user:userStore
			})
			return userStore
			break;			
		default:
			return state;
			break;
	}
}
const Reducer = combineReducers({
	user,
})

export default Reducer;