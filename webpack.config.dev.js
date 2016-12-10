import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Handle the html files in production
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    //
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
    ]
  }
}
