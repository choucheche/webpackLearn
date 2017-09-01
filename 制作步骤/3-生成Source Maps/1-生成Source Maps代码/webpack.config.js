const path = require('path');


module.exports = {
  entry: './src/index.js',
  //输入路径
  devtool: 'inline-source-map',
  //devtool: 'inline-source-map',如果代码编译错了，cmd会告诉你哪的错误
  output: {
  //输出路径
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};