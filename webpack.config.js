const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const prod = process.argv.includes('-p');

const config = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'installer', 'docker'),
    filename: 'docker.js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              camelCase: true,
              localIdentName: '[hash:base64:5]'
            }
          }
        })
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'docker.html',
    }),
    new ExtractTextPlugin('docker.css'),
  ],
};

if (prod) {
  config.plugins.push(
    // Remove comments from production build
    new webpack.optimize.UglifyJsPlugin({ comments: false })
  );
}

module.exports = config;
