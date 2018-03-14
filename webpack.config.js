const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/ARUsageExamples/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: {
      index: 'index.html'
    },
    port: 9000,
    proxy: {
      '/api': 'http://localhost:9001'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.(png|jpg|patt|gltf|bin)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            attrs: [':src', ':url', ':patternUrl']
          }
        },]
      },
    ]
  },
  node: {
    fs: "empty"
 },
  plugins: [new HtmlWebpackPlugin({
    title: 'Welcome to AR',
    template: './src/template.html',
    filename: './index.html'
  })]
};
