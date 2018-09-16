const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const PUB_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: APP_DIR,
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
							{
								loader: 'babel-loader',
          				options: {
          					presets: ['react']
		  						}
		  				}
				],
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: 'Amal Nazeem\'s Website',
      favicon: `${SRC_DIR}/TomatoToaster.ico`,
      template: `${SRC_DIR}/index.html`,
      filename: `${APP_DIR}/index.html`,
    }),
  ],
  devServer: {
	contentBase: PUB_DIR,
  }
};

module.exports = config;
