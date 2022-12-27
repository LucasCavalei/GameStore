const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  // entry: './client/src/index.js',
  entry: path.resolve(__dirname, './client/src/index.js'),
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './client/public/index.html',
      // favicon: "./public/favicon.ico"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            preset: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // devServer: {
  //   port: 3000,
  //   open: true,
  //   historyApiFallback: true,
  //   proxy: {
  //     '/api': 'http://localhost:8888',
  //   },
  // },
};
