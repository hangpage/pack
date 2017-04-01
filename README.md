#### 介绍 
Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。
####安装
先装好node和npm，因为webpack是一个基于node的项目
`npm install -g webpack` 
#### 建立项目
- `mkdir webpack`
- `cd webpack`
- `npm init`
#### webpack做了什么？
- 从 context 对应的文件夹开始
- 寻找 entry 里所有的文件名并读取内容。每个通过 import（ES6） 或 require()（Node） 引入的依赖关系，会被解析代码，并且被打包到最终的构建结果当中。然后它搜索这些依赖，以及这些依赖的依赖，直到“依赖树”的最末端节点 — 只打包它所需要的依赖，没有其他的东西。
- Webpack 将所有东西打包到 output.path 对应的文件夹里，使用 output.filename 对应的命名模板来命名（[name] 被 entry 里的对象键值所替代）
#### Webpack Loader
- 可以将React JSX语法转为js语句 支持ES6语法
- 支持通过import来直接引入css、less、sass甚至是图片
- 支持css中引用的图片大小在某一大小范围之内直接转为BASE64格式

#### 指令
 - `npm install html-webpack-plugin --save-dev`
 - `npm install css-loader style-loader --save-dev`
 - `npm install webpack-dev-server --save-dev`(自动刷新服务就是基于这个的)
 - `npm install babel-core babel-loader --save-dev`

#### webpack.config.js
	var path = require('path');
	var HtmlwebpackPlugin = require('html-webpack-plugin');
	//定义了一些文件夹的路径
	var ROOT_PATH = path.resolve(__dirname); //_dirname 指的是 webpack.config.js 所在的目录
	var APP_PATH = path.resolve(ROOT_PATH, 'app');
	var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

	module.exports = {
  	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  	devtool: 'eval-source-map',
  	entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  	},
  	//输出的文件名 合并以后的js会命名为bundle.js
 	 output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  	},
  	devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port:'8088'
 	 },
  	resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader'],
        include: APP_PATH,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH,
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
};

#### 链接资源
[webpack loader](https://webpack.js.org/concepts/loaders/)

## 关于一点点React
- ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
- JSX语法规则：遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；遇到代码块（以 { 开头），就用 JavaScript 规则解析
- React.creatClass方法用于生成组件类，其必须包含有render方法用于输出组件!
- render方法输出组件供ReactDOM.render使用 当模板中插入`<HelloMessage />`时，会生成组件类的一个实例.
- class属性对应className属性 for属性对应htmlFor 同时支持自定义属性
- React提供`React.Children`来处理`this.props.children`,用`React.children.map`来遍历子节点，并且遍历过程中不用担心其数据类型
- `this.refs.[refName]`属性获取的是真实dom 
## this.state
- `getIntialState`定义初始状态,状态是一个对象，保存在`this.state`身上
- `this.setState`方法修改状态值,修改完毕后会自动调用`this.render`方法来渲染组件。

### 补充
  由于时间关系，还有很多跟功能没有具体操作，会在以后的时间里补充!
