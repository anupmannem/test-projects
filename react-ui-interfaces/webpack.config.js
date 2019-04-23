const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './source/client.js'],
  output: {
    path: path.join(__dirname, './'),
    filename: 'build.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
