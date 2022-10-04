const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: 'development', // 去除警告，development: 开发者模式，production: 用户模式
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'index.[contenthash].js', // 配置缓存
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AKI', // 最终会显示在生成的 html 的 title中
      template: 'src/assets/index.html', // html 模板
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      {
        // 如果发现了任何以 .css 结尾的文件名，就用 css-loader 将该文件内容读到 js 文件中
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
        // use: ['style-loader', 'css-loader'],
        // style-loader 会将 css-loader 读到的内容变成 style 标签放到 head 中
      },
    ],
  },
}
