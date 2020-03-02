const path = require('path');
//const { resolve } = require('path');
//const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {


  entry: { main: "./src/js/index.js"},
 
  output: {
    filename: 'index_bundle.js'
    path: path.resolve(__dirname, 'dist'),
    
  },
  devtool: 'inline-source-map',

  

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
        template: './src/index.html',
        templateParameters: {
        titulo: 'Wep',
        encabezamiento: 'Webpack',
      }
    }),
    
    new MiniCSSExtractPlugin({filename: "css/style.css"}),
    new webpack.HotModuleReplacementPlugin(),
    

  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 9000
  }
};