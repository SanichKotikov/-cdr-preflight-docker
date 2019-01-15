const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'development',
  performance: {
    hints: false,
  },
  stats: {
    entrypoints: false,
    children: false,
  },
  entry: {
    docker: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'installer', 'docker'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              camelCase: true,
              localIdentName: '[hash:base64:5]'
            }
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ]
  },
  optimization: {
    minimizer: [],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'docker.html',
    }),
    new MiniCssExtractPlugin('docker.css'),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.mode = 'production';

  config.optimization.minimizer.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJsPlugin({
      test: /vendor\.js/i,
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          comments: false,
        },
      },
    }),
    new UglifyJsPlugin({
      test: /docker\.js/i,
      uglifyOptions: {
        compress: {
          drop_console: true,
        },
        output: {
          beautify: true,
          indent_level: 2,
          comments: false,
        },
      },
    }),
    new OptimizeCSSAssetsPlugin({}),
  );
}

module.exports = config;
