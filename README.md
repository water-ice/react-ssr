# 简介 

a project build by `react` ,`react-router`,`redux` and `antd`.


# 用法

```
	npm install webpack-dev-server -g
```




# 问题列表

1. how to place some method and varible  which is used in whole application. just like some regexp ?

2. why webpack-dev-server recompile so snow and must reload this page?

3. why webpack-dev-server will throw error never stop. it has threw more than 50 thousand?

4. how to make .css,.less,.sass,.styl etc, style file compiled by css-loader,less-loader,sass-loader,stylus-loader, and then make output in one css file?

5. 如何配置字体的文件路径

6. 开发环境中如何做到更改css不刷新页面？


# 解决方案


### 参考资料

> * [react-router-dom](https://reacttraining.com/react-router/web/example/basic)

> * [vue-cli](https://github.com/vuejs/vue-cli)


### 笔记 

1. 如何提升**first build**与**rebuild**的速度

2. 使用**cheap-module-eval-source-map**可以提升约40%的速度

3. css文件loader解析顺序优先级：style-loader > css-loader > less-loader/sass-loader/stylus-loader

4. 再react中使用**css-modules**

核心包是[react-css-modules](https://github.com/gajus/react-css-modules)，但是不是特别的好使，使用的方法为：

```
	import ReactCssModules from 'react-css-modules'
	import ComponentFooterStyle from '@style/component_footer_index.less'

	class ComponentFooter extends React.Component {
		...
		render(
			return(
				<div>
					<h3 styleName="footer-wrapper"></h3>	
					<h3 className={ComponentFooter.footer-wrapper}></h3>
				</div>
			)
		)
	}
	export default ReactCssModules(ComponentFooter,ComponentFooterStyle)
```

组件得通过**ReactCssModules**的包装，然后交给**ReactDOM**去渲染

 

### 探索

1. 如何为体积庞大的vendor库减肥

描述：vendor.js中集合了`react`,`react-dom`,`react-router`,`antd`四个包，四个包的压缩js版本算到一起也只有300K+，为什么生产环境构建出来的却是**1.4M**。
实验：分别去除了这4个包，进行了四次实验，发现当移除`antd`这个包后，体积有明显的减小，只有**140K**，这才是正常的大小

猜测：为什么引入了`antd`后体积会如此庞大，猜测是在`antd`内部又引入了`react`包，导致了依赖的混淆，所以想要解决这个问题，应该是**消除在antd内部重复引入的react包**

原因：事实上面的猜测是错误的，因为`antd`这个包本身的本身就大，仅仅这个UI框架本身打包出来也有**1.3M**，即便是按需加载，最少也得**400K+**，这已经比**React+React-router+React-redux+redux**核心库加起来都大了，所以毫无疑问，我们不需要**antd**。

解决：移除antd框架


