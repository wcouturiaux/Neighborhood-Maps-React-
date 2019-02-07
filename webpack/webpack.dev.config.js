var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js')
  ],
  module: {
    rules: [{
      test: /\.(js|jsk)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "less-loader"
          }
        ]
    }]
  },
  output: {
    publicPath: '/',
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
}
