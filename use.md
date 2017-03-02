`npm install sass-loader --save-dev` 加载sass loader帮助处理sass文件
`npm install css-loader style-loader --save-dev` 加载cssloader自动引入css文件
`npm install webpack-dev-server --save-dev` 配置本地服务器(自动刷新服务)
`npm install babel-core babel-loader --save-dev` 配置babel
`"scripts": {
    "start": "webpack-dev-server --hot --inline"
  },` 开发环境下的package.json配置
`"scripts": {
    "start": "webpack-dev-server --hot --inline",
    "build": "webpack --progress --profile --colors --config webpack.production.config.js"
  },`将要上线时候的配置 打包功能
