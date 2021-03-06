const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.config.common.js');
const AppCachePlugin = require('appcache-webpack-plugin');

module.exports = function(options) {
  const ENV = options.ENV || 'production';
  const AOT = !!options.AOT || false;

  return webpackMerge(commonConfig, {
    entry: {
      'polyfills': './app/polyfills.ts',
      'vendor': './app/vendor.ts',
      'app': `./${AOT ? 'aot' : 'app'}/bootstrap.ts`
    },
    plugins: [
      // new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        'ENV': JSON.stringify(ENV),
        'AOT': JSON.stringify(AOT)
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
       // beautify: true, //debug
       // mangle: false, //debug
       // unused: false, //debug
       // deadCode: false, //debug
       // compress: {
       //   screw_ie8: true,
       //   keep_fnames: true,
       //   drop_debugger: false,
       //   dead_code: false,
       //   unused: false
       // }, // debug
       // comments: true, //debug
        mangle: {
          screw_ie8 : true,
          // keep_fnames: true // required for ng2 rc.5
        }, //prod
        compress: {  //prod
          screw_ie8: true,
          warnings: false
        },
        comments: false //prod
      }),
      new AppCachePlugin({
        exclude: ['app.js','styles.css'],
        output: 'app.appcache'
      })
    ]
  });
}
