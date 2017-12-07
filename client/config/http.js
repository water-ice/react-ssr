import axios from 'axios';


export default {
    get(url,params){
        return new Promise((resolve,reject)=>{
            axios.get(url,param)
            .then(res=>{
                console.log(res)
                resolve(res)
            })
            .catch(err => {

            })
        })
    },
    post(url,param){

    }
}