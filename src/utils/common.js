export function trim(value){
	return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
export function isEmpty (value){
	return (value == null || value.length == 0) ? true:false
}