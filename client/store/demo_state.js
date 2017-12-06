import  { observable, computed, autorun, action } from 'mobx'

export default class DemoState {
    constructor({count,name} = { count:0,name:"test name"}) {
        this.count = count;
        this.name = name;
    }
    // 初始化数据
    @observable count 
    @observable name 
    // 获取
    @computed get msg () {
        return `${this.name} say count is ${this.count}`
    }
    // 修改
    @action addCount(){
        this.count += 1;
    }
    @action changeName(name){
        this.name = name
    }
    // 为服务器端渲染准备
    toJson(){
        return {
            count: this.count,
            name: this.name
        }
    }
}


// const state = new AppState();

// // 数据变化后的钩子函数
// autorun(()=>{
//     console.log(state.msg)
// },1000)

// setInterval(()=>{
//     state.count += 1;
// },1000)

// export default state;