# 写在前面

这是一个React服务器端渲染的框架，或者说是一个项目模板;他的诞生是为了满足大部分应用**多页面，需要SEO支持，高性能要求，且具有复杂业务逻辑**的需求。

选择这个模板之前，有以下几点需要了解的：

* 这个模板所生成的应用实质上仍然是一个单页面。
* 他在生产环境使用了NodeJS作为中间件，处理用户信息存储，接口转发，渲染页面的功能。
* 适用于中低复杂度的应用，如企业官网，擅长于列表页，详情页，介绍页等。
* 不适用于管理系统，个人中心，移动端等SPA应用。
* 开发环境支持：热更新+es6+less+mobx
* 生产环境支持：静态资源压缩，混淆，重命名，拆分
* 使用PM2进行部署，git更新代码，0延时重启

### 设计思路

### 解决方案

* nodemon每次重启更新报告端口被占用


nodemon 1.12.4版本在win10上的bug，详情请[点击](https://github.com/remy/nodemon/issues/1109)
