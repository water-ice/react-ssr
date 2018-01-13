import { 
    observable,
    action,
    toJS,
} from 'mobx';
import http from '@serverConfig/http' 


export default class TestStore {
    constructor(data){
        this.datas= data;
    }
    @observable datas 
    @action getData(){
        return new Promise((resolve,reject) => {
            http.post('http://php.wangerniu.org/contest/get_contest_list')
            .then(response => { 
                this.datas = response.data;
                // console.log(response.status)
                // console.log(this.datas.status)
                // console.log(this.datas.info[0].thumb)
                resolve();
            })
        })
    }
    toJson(){
        return { 
            datas:toJS(this.datas), 
        }
    }    
}