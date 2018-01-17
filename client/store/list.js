import { 
    observable,
    action,
    toJS,
} from 'mobx';
import http from '@serverConfig/http' 
import config from '@serverConfig/index';
const domain = config.getDomain();
export default class ListStore {
    constructor(data){
        this.list = data;
    }
    @observable list1 = {}
    @observable list2 = {}

    @action getList1(){
        return new Promise((resolve,reject) => {
            http.post(`${domain}/contest/getCon`)
        })
    }
}