const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  
  mode: 'development',//设置为生产模式
  // mode: 'production',
  devtool: 'source-map',
  // 配置入口
  entry: {
    'js/index': path.join(__dirname,'./src/main.js')
  },
  // 配置出口
  output: {
    path:path.join(__dirname,'./dist'),
    filename: '[name]-[hash:6].js' 
  },
  module: {
    rules: [
      {
        test: /\.art$/,
        exclude: /node_modules/,
        use: {
          loader: "art-template-loader"
        }
      }
    ]
  },
  // 配置插件
  plugins: [
    new HtmlWebpackPlugin(
      {
        template:path.join(__dirname,'./public/index.html'),
        inject:true
      }
    ),
    new CopyPlugin({
      patterns: [
        {
          from: './public/*.ico',
          to: path.join(__dirname, './dist/favicon.ico')
        }
      ]
    }),
    new CleanWebpackPlugin(),
  ],
  // 配置server
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9000
  }
}