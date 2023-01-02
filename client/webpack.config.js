const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, outputDirectory),
  },

  plugins: [
    // user este talves no PRODUCTION
    // new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './public/favico n.ico',
    }),
  ],
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
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(js|jsx)$/,
  //         exclude: /node_modules/,
  //         use: {
  //           loader: 'babel-loader',
  //           options: {
  //             preset: ['@babel/preset-env', '@babel/preset-react'],
  //           },
  //         },
  //       },
  //       {
  //         test: /\.scss$/,
  //         use: ['style-loader', 'csss-loader', 'sass-loader', 'file-loader'],
  //       },
  //     ],
  //   },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8888',
    },
  },
};
