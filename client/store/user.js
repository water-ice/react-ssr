import { 
    observable,
    action,
    toJS,
} from 'mobx'
export default class UserStore {
    constructor(){
    }
    @observable user = {
        isLogin:false,
        info:{}
    }
    @action setUserInfo(userInfo){
        this.user.info = userInfo;
        this.user.isLogin = true;
    }
    @action getUserInfo(){
        return this.user.info;
    }
    @action clearUserInfo(){
        this.user.info = {};
        this.user.isLogin = false;
    }
    toJson(){
        return { 
            user:toJS(this.user)
        }
    }
}