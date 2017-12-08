
module.exports = {
  port:{
    client:8088,
    develop:3000,
    product:3306
  },
  isDev:process.env.NODE_ENV === 'develop',
  isApiDev:process.env.API_ENV === 'develop',
  domain:{
    dev:"http://php.wangerniu.org",
    prod:"http://api.whalesdesign.com"
  }
}