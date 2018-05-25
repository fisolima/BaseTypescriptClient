const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/startup.ts'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Ratatank',
        template: './src/index.html',
        inject: 'head'
    })    
  ],
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
      rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            include: [
              path.resolve(__dirname, "node_modules/mini.css/dist"),
              path.resolve(__dirname, "src/css")
            ],
            use: [
              'style-loader',
              'css-loader'
            ]
        }
      ]
  }
};
