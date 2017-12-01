const Str = Object.prototype.toString;

export function isObj(arg){
	Str.call(arg) === "[object Object]";
}