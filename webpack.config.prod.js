import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // External Css with cache busting
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Add hashes to the files for cache busting when content changes
    new WebpackMd5Hash(),

    // CommonsChunkPlugin to create a separate bundle
    // for separate caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Handle the html files in production
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    // Eliminate duplicate packages on bundling
    new webpack.optimize.DedupePlugin(),

    // Minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap') }
    ]
  }
}
