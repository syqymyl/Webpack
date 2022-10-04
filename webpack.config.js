const path = require('path')

module.exports = {
  mode: 'development', // 去除警告，development: 开发者模式，production: 用户模式
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // 转义后生成一个 dist 文件夹
    filename: '[name].[contenthash].js', // 配置缓存
    // filename: 'index.js', // 转义后的文件命名为 index.js，存放在 dist 文件夹下
  },
}
