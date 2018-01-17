import { 
    observable,
    action,
    toJS,
    autorun
} from 'mobx'
export default class UserStore {
    constructor( data){  
        this.user = data|| {}; 
    }
    @observable user = {}
    @action setUserInfo(userInfo){ 
        this.user = userInfo || {};
    }
    @action getUserInfo(){
        return this.user
    }
    @action clearUserInfo(){
        this.user = {};
    }

    toJson(){
        return { 
            user:toJS(this.user)
        }
    }
}