import { observable,action } from 'mobx'
import http from '../../config/http'
class BattleState {
    constructor({ BattleList = [], testInfo ="" } = {}){
        this.BattleList = BattleList
        this.testInfo = testInfo 
    }
    @observable BattleList
    @observable testInfo

    @action GetBattleList(){ 
        return new Promise((resolve,reject)=>{
            http.get('/api/contest/get_contest_list')
            .then(response => {
                // console.log(response.data)
                if(response.status == 200 && response.data.status ==1) {
                    this.BattleList = response.data.info;
                }
                else {
                    this.BattleList = [
                        {
                            "error":"接口获取错误"
                        }
                    ]
                }
                resolve();
            })
            .catch(err =>{
                console.log(err)
                reject()
            })
        })

    }
    @action DeleteBattleList(){
        this.BattleList.splice(1,1)
    }
    toJson(){
        return {
            BattleList:this.BattleList,
            testInfo:this.testInfo
        }
    }
}
export default BattleState