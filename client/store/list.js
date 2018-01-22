import { 
    observable,
    action,
    toJS,
} from 'mobx';
import http from '@serverConfig/http' 
import config from '@serverConfig/index';
const domain = 'http://127.0.0.1:3002';
export default class ListStore {
    constructor(List1Data,List2Data){
        this.list1 = List1Data || {};
        this.list2 = List2Data || {};
    }
    @observable list1 = {}
    @observable list2 = {}

    @action getList1(){
        return new Promise((resolve,reject) => {
            http.post(`${domain}/api/goods/get_list1`)
            .then(response => {
                if(response.status == 200 && response.data.status == 1) {
                    this.list1 = response.data;
                }
                resolve(response.data);
            })
        })
    }
    @action getList2(){
        return new Promise((resolve,reject) => {
            http.post(`${domain}/api/goods/get_list2`)
            .then(response => {
                if(response.status == 200 && response.data.status == 1) {
                    this.list2 = response.data;
                }
                resolve(response.data);
            })
        })
    }
    toJson(){
        return {
            list1:toJS(this.list1),
            list2:toJS(this.list2),
        }
    }
}