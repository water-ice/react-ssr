import {
  observable, 
  computed, 
  action 
} from 'mobx';
import http from '../../config/http'
export default class ContestsStore {
  constructor({contestList} = {contestList:[]}){
    this.contestList = contestList
  }
  @observable contestList
  
  @action getContestList(){
    return new Promise((resolve,reject)=>{
      this.contestList=[]
      http.get('/api/contest/get_contest_list')
      .then(response => {
        console.log(response)
        if(response.status == 200) {
          resolve(response.data)
        }
        else{
          resolve({
            'status':'error',
            'error_message':"赛事信息接口错误："+response.status
          })
        } 
      })  
      .catch((err)=>{
        console.log("[store/contests_store:waring]赛事列表数据获取错误："+err)
        reject(err)
      })
    })
  }
}