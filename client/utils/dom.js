class DOM {
    constructor(selector){
        this.nodes = Array.from(document.querySelectorAll(selector));
    }
    html(content){
        this.nodes.forEach(item=>item.innerHTML = content)
        return this;
    }
    eq(count){
        this.nodes = new Array(this.nodes[count])
        return this;
    }
    css() {
        if(arguments.length > 2) {
            console.error('[DOM Arguments Error]:传入参数长度错误，你的参数长度为:'+arguments.length)
        }
        else if(arguments.length == 2){
            Array.from(this.nodes).forEach(item  => {
                item.style[arguments[0]] = arguments[1]
            })               
        }
        else {
            Object.keys(arguments[0]).forEach(item =>{
                this.nodes.forEach(etem => { 
                    etem.style[item] = arguments[0][item]
                })
            })
        }
        return this;
    }
    addClass(className){
        this.nodes.forEach(item=>item.classList.add(className))
        return this;
    }
    removeClass(className){ 
        this.nodes.forEach(item =>item.classList.remove(className))
        return this;
    }
    addEvent(element,type,callback){
        if(element.addEventListener){
            element.addEventListener(type,callback,false)
        }
        else if (element.attachEvent) {
            element.attachEvent("on"+type,callback)
        }
        else {
            element["on"+type] = callback;
        }
        return this;
    }
    removeEvent(element,type,callback){
        if(element.removeEventListener){
            element.removeEventListener(type,callback,false)
        }
        else if (element.detachEvent) {
            element.detachEvent("on"+type,callback)
        }
        else {
            element["on"+type] = null;
        }
        return this;
    }
    bind(type,callback) {
        this.nodes.forEach(item =>this.addEvent(item,type,callback));
        return this;
    }
    unbind(type,callback) {
        this.nodes.forEach(item =>this.removeEvent(item,type,callback));
        return this;
    }
    empty(){
        this.nodes.forEach(item =>item.innerHTML ='');   
        return this;     
    }
}
export default DOM;