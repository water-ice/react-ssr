
module.exports = {
  port:{
    client:8087,
    develop:3002,
    product:3001
  },
  isDev:process.env.NODE_ENV === 'develop', 
  isNode: (typeof window ==="undefined"),
  domain:{
    // dev:"http://php.wangerniu.org",
    dev:"http://api.lips-gp.top",
    prod:"http://php.wangerniu.org"
  },
  appid:"test appid",
  apptoken:"test app token",
  getDomain(){
    return (process.env.API_ENV =='production') ? this.domain.prod:this.domain.dev;
  }
}