#### 介绍
Webpack 是当下最热门的前端资源模块化管理和打包工具。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。通过 loader 的转换，任何形式的资源都可以视作模块，比如 CommonJs 模块、 AMD 模块、 ES6 模块、CSS、图片、 JSON、Coffeescript、 LESS 等。
#### 安装
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

####指 令
 - `npm install html-webpack-plugin --save-dev`
 - `npm install css-loader style-loader --save-dev`
 - `npm install webpack-dev-server --save-dev`(自动刷新服务就是基于这个的)
 - `npm install babel-core babel-loader --save-dev`

#### json文件中的一些配置
 - `"scripts": {
    "start": "webpack-dev-server --hot --inline"
  },` 开发环境下的package.json配置
