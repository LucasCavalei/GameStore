const merge = require('webpack-merge');
const Webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDirectory = '../dist';

('inline-source-map');
module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        use: 'url-loader?limit=100000',
      },

      {
        test: /\.(txt|md)$/,
        use: 'raw-loader',
      },
    ],
  },

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,

    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8888/',
    },
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new EnvironmentPlugin({ SERVER_URL: 'http://localhost/8888/' }),
    new Dotenv({
      path: './.env',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './public/favico n.ico',
    }),
    //   '  ',
  ],
};
