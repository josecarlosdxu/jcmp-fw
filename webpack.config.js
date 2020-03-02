const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

//const HtmlWebpackHotPlugin = require('html-webpack-hot-plugin')


const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



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
    //new MiniCSSExtractPlugin({filename: "css/style.css",  chunkFilename: "[id].css"}),

  ],
  module: {
    rules: [
      // {
      //   test: /\.scss$/,
      //   loader: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
        
      // }
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
      
    ]
  },
  devServer: {
   
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000
  }
};