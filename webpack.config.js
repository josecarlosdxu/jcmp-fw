const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackHotPlugin = require('html-webpack-hot-plugin');


const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlHotPlugin = new HtmlWebpackHotPlugin({ hot: true,});



module.exports = {
  entry: { main: "./src/js/index.js"},
  
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
    
  },
  devtool: 'inline-source-map',
  watch: true,
  

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
        template: 'src/index.html',
        templateParameters: {
        titulo: 'Wep',
        encabezamiento: 'Webpack',
      }
    }),
    htmlHotPlugin,
    new MiniCssExtractPlugin({filename: "css/style.css"}),
    

  ],
 module: {
    rules: [{
      test: /\.scss$/,
      use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    }]
  },
  devServer: {
    before(app, server) {
       htmlHotPlugin.setDevServer(server)
    },
    
   
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000
  }
};