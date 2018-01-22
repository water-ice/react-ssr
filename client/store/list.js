import { 
    observable,
    action,
    toJS,
} from 'mobx';
import http from '@serverConfig/http' 
import config from '@serverConfig/index';
const domain = 'http://127.0.0.1:3002';
export default class ListStore {
    constructor(){
        if(config.isNode) {
            this.cookie = arguments[0]
        }
        else {
            this.list1 = arguments[0];
            this.list2 = arguments[1];
        }
    }
    @observable list1 = {}
    @observable list2 = {}

    @action getList1(){ 
        return new Promise((resolve,reject) => {
            if(config.isNode) {
               http.post(`${domain}/api/goods/get_list3`,{},{},{
                   token:this.cookie.token,
               })
                .then(response => {
                    console.log('--------------用户登录状态-----------------')
                    console.log(response.data) 
                    console.log('--------------用户登录状态-----------------')
                })        
            }
            if(config.isNode) {
                http.post(`${domain}/api/goods/get_list1`,{},{},{cookie:this.cookie})
                .then(response => {
                    if(response.status == 200 && response.data.status == 1) {
                        this.list1 = response.data;
                    }
                    resolve(response.data);
                })    
            }
            else {
                http.post(`${domain}/api/goods/get_list1`)
                .then(response => {
                    if(response.status == 200 && response.data.status == 1) {
                        this.list1 = response.data;
                    }
                    resolve(response.data);
                })                    
            }
        })
    }
    @action getList2(){
        return new Promise((resolve,reject) => {
            if(config.isNode) {
                http.post(`${domain}/api/goods/get_list2`,{},{},{cookie:this.cookie})
                .then(response => {
                    if(response.status == 200 && response.data.status == 1) {
                        this.list2 = response.data;
                    }
                    resolve(response.data);
                })    
            }
            else {
                http.post(`${domain}/api/goods/get_list2`)
                .then(response => {
                    if(response.status == 200 && response.data.status == 1) {
                        this.list2 = response.data;
                    }
                    resolve(response.data);
                })                    
            }
        })
    }
    toJson(){
        return {
            list1:toJS(this.list1),
            list2:toJS(this.list2),
        }
    }
}