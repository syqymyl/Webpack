const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development', // 去除警告，development: 开发者模式，production: 用户模式
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js', // 配置缓存
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AKI', // 最终会显示在生成的 html 的 title中
      template: 'src/assets/index.html', // html 模板
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // 以 .css 结尾的文件
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
