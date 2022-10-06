const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
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
}
