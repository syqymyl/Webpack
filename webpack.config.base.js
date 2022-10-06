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
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          // compiles Stylus to CSS
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('dart-sass'),
            },
          },
        ],
      },
    ],
  },
}
