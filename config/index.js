
module.exports = {
  port:{
    client:8088,
    develop:3000,
    product:3306
  },
  isDev:process.env.NODE_ENV === 'develop', 
  domain:{
    dev:"http://php.wangerniu.org",
    prod:"http://api.whalesdesign.com"
  },
  GetHostByRequest(req){
    let isApiDev = req.headers.host.indexOf('whalesdesign')> -1? false:true;
    let ApiDomain = isApiDev ? this.domain.dev:this.domain.prod
    return ApiDomain
  },
  appid:"test appid",
  apptoken:"test app token"
}