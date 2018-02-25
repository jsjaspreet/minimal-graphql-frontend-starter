const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const projectPaths = require('../projectPaths')

module.exports = {
  entry: {
    bundle: [
      'react-hot-loader/patch',
      projectPaths.clientEntry
    ],
    vendor: [
      'react',
      'react-dom',
      'react-loadable',
      'react-hot-loader',
      'react-router-dom',
    ]
  },
  output: {
    filename: '[name].[hash].[id].js',
    chunkFilename: '[name].[hash].[id].js',
    path: projectPaths.distDir
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: projectPaths.rootDir }),
    new HtmlWebpackPlugin({
      template: path.join(projectPaths.viewsDir, 'index.html'),
      hash: true,
      inject: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: projectPaths.sourceDir,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|ttf)$/,
        loader: 'url-loader',
        query: { limit: 10000000 },
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        query: { limit: 10000000 },
        exclude: /node_modules/
      },
    ]
  }
}
