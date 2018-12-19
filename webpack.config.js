const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const APP_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const PUB_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: [`${SRC_DIR}/index.js`],
  output: {
    path: APP_DIR,
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Amal Nazeem\'s Website',
      favicon: `${PUB_DIR}/TomatoToaster.ico`,
      template: `${SRC_DIR}/index.html`,
      filename: `${APP_DIR}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],

  devServer: {
    contentBase: PUB_DIR,
  },
};

module.exports = config;