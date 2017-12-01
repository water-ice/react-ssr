import { isObj } from '@utils/type'
const Storage = {
	get(key){
		return JSON.parse(localStorage.getItem(key))
	},
	set(obj){
		Object.keys(obj).forEach((item,index)=>{
				localStorage.setItem(item, JSON.stringify(obj[item]))	
		})
	},
	clear(){
		localStorage.clear();
	}
}
export default Storage;