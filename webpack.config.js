const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: { main: "./src/js/index.js"},
  context: __dirname,
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  watch: true,

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
        template: './src/index.html',
        templateParameters: {
        titulo: 'Wep',
        encabezamiento: 'Webpack',
      }
    }),
    
    new MiniCSSExtractPlugin({filename: "css/style.css"}),

  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
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