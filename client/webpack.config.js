// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const outputDirectory = '../dist';

// ('inline-source-map');
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, outputDirectory),
//   },

//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: ['style-loader', 'css-loader', 'sass-loader', 'file-loader'],
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
//         use: 'url-loader?limit=100000',
//       },
//       {
//         test: /\.(txt|md)$/,
//         use: 'raw-loader',
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//             options: { minimize: true },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: ['css-loader'],
//       },
//     ],
//   },
//   //   module: {
//   //     rules: [
//   //       {
//   //         test: /\.(js|jsx)$/,
//   //         exclude: /node_modules/,
//   //         use: {
//   //           loader: 'babel-loader',
//   //           options: {
//   //             preset: ['@babel/preset-env', '@babel/preset-react'],
//   //           },
//   //         },
//   //       },
//   //       {
//   //         test: /\.scss$/,
//   //         use: ['style-loader', 'csss-loader', 'sass-loader', 'file-loader'],
//   //       },
//   //     ],
//   //   },
//   devtool: 'inline-source-map',
//   devServer: {
//     port: 3000,
//     hot: true,
//     open: true,
//     historyApiFallback: true,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         router: () => 'http://localhost:8888',
//         logLevel: 'debug' /*optional*/,
//       },
//     },
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx', '.css'],
//     modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//   },
//   plugins: [
//     // user este talves no PRODUCTION
//     // new CleanWebpackPlugin([outputDirectory]),
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//       filename: './index.html',
//     }),
//     //   //não havia esse acima =============================  filename: './index.html',============
//     //   // favicon: './public/favico n.ico',
//     //   new CleanWebpackPlugin(),
//   ],
// };

// const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const Webpack = require('webpack');
const path = require('path');
// const EnvironmentPlugin = require('webpack-env-plugin');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const dotenv = require('dotenv');
// dotenv.config();
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = '../dist';

('inline-source-map');
module.exports = {
  // entry: './src/index.js',
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'bundle.js',
    // path: path.join(__dirname, outputDirectory),
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

      // target: 'http://localhost:3000',
      // router: () => 'http://localhost:8888',
      // logLevel: 'debug' /*optional*/,
    },
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new EnvironmentPlugin({ SERVER_URL: 'http://localhost/8888/' }),
    //   // user este talves no PRODUCTION
    //   // new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './public/favico n.ico',
    }),
    //   '  ',
  ],
};
