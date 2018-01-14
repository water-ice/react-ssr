/**
 * 数组工具方法
 * @author 王磊
 * @date 2017/12/13
 */ 

/**
 * @method 数组去重
 * @param  { Array } arr 被去重数组
 * @return { Array } 单纯数组
 * @example simpleArray([1,1,2,3]) => [1,2,3] 
 */
export function simpleArray(arr){
    return arr.filter(function (item, index, self) {
        return self.indexOf(item) === index;
    });    
}

/**
 * @method   打乱数组
 * @param    { Array } arr 被打乱数组 
 * @return   { Array } 打乱后驻足
 * @example  upsetArray([1,2,3,4]) => [4,2,3,1]
 */ 
export function upsetArray(arr) {
    return arr.sort(function () {
        return Math.random() -0.5;
    })
}

/**
 * @method   求数字数组中最大值
 * @param    { Array } arr 数字数组 
 * @return   { Number } 数组中的最大值
 * @example  maxItem([1,2,3,4]) => 4
 */ 
export function maxItem(arr){
    return Math.max.apply(null,arr)
}

/**
 * @method   求数字数组中最小值
 * @param    { Array } arr 数字数组 
 * @return   { Number } 数组中的最小值
 * @example  minItem([1,2,3,4]) => 1
 */ 
export function minItem(arr){
    return Math.min.apply(null,arr)
}