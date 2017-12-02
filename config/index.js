const IsDev = process.env.NODE_ENV === 'develop';

module.exports = {
  port:IsDev?3000:3306
}