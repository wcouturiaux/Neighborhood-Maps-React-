var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsk)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.less$/,
      loader: ["style-loader", "css-loader", "less-loader"]
    }]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',
    historyApiFallback: true
  }
}
