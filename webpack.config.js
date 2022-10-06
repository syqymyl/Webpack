const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const base = require('./webpack.config.base')
module.exports = {
  ...base, // 把 base 所有属性抄过来
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  mode: 'development', // 去除警告，development: 开发者模式，production: 用户模式
  module: {
    rules: [
      ...base.module.rules,
      {
        // 如果发现了任何以 .css 结尾的文件名，就用 css-loader 将该文件内容读到 js 文件中
        test: /\.css$/i,

        // style-loader 会将 css-loader 读到的内容变成 style 标签放到 head 中
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
