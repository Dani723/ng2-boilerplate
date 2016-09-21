const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/bootstrap.ts'
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loaders: ['awesome-typescript-loader?useWebpackText=true', 'angular2-template-loader'],
      },
      {
        test: /\.html?$/,
        loaders: ['raw-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader?-url"
        })
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
    ]
  },

  output: {
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[name].[hash].bundle.map',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.ProgressPlugin({}),
    new CopyWebpackPlugin([{
      from: 'app/public',
      to: ''
    }]),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      chunksSortMode: 'dependency'
    }),
  ],
  resolve: {
    mainFields: ["module", "browser", "main"],
    extensions: ['.js', '.ts']
  }
}
