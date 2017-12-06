
module.exports = {
  port:{
    client:8088,
    develop:3000,
    product:3306
  },
  isDev:process.env.NODE_ENV === 'develop'
}