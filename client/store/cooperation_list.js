import { observable,action } from 'mobx'
import http from '../../config/http'

export default class CooperationState {
    constructor({ cooperationList = [] } = {}){
        this.cooperationList = cooperationList;
    }
    @observable cooperationList

    @action GetCooperationList(){
        return new Promise((resolve,reject) =>{
            http.get('/api/user/get_user_list')
            .then(response => {
                if(response.status == 200) {
                    this.cooperationList = response.data.info;
                }
                resolve()
            })
            .catch(err => {
                console.log("老师列表信息报错："+err)
                reject();
            })
        })
    }
    toJson(){
        return {
            cooperationList:this.cooperationList
        }
    }
}
