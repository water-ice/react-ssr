function getCountDown(){

}
/**
 * @method {  } 时间戳转时间格式
 * @param { String } 时间戳
 * @return {  }
 */ 
export function stampToDay(stamp){
    const gmt = new Date(stamp*1000)
    const year = gmt.getFullYear();
    const month = gmt.getMonth()+1;
    const day = gmt.getDate();
    return `${year}年${month}月${day}日`
}

// 赛事列表页面的赛程截止时间
export function cutOffTime(endTimer){
    const nowTime = new Date().getTime(); // 毫秒时间戳
    const endTime = endTimer*1000; // 转换成毫秒时间戳

    // debugger;
    if(nowTime > endTime){
        return null
    }else{
        const cutOffTimer = (endTime-nowTime)/1000; //转换成秒时间戳
        if(cutOffTimer >= 86400){
            const day = Math.ceil(cutOffTimer/86400);
            return day
        }else{
            if(cutOffTimer >= 3600){
                const hour = Math.ceil(cutOffTimer/3600);
                return hour
            }else{
                const minute = Math.ceil(cutOffTimer/60);
                return minute
            }
        }
    }
}