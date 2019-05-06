const baseConfig = require('./webpack.conf')
const mode = "development"
const path = require('path')

const devConfig = Object.assign({
  mode,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    publicPath: '/',
    hot: true,
    host: "127.0.0.1",
    overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
    open: true,
  },
  devtool: 'inline-source-map',
}, baseConfig)
module.exports = devConfig;