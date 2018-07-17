const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

const app_dir = path.resolve(__dirname, 'dist');
const src_dir = path.resolve(__dirname, 'src');

const config = {
	entry: `${src_dir}/index.js`,
	output: {
		path: app_dir,
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
		new htmlwebpackplugin({
			hash: true,
			title: 'Amal Nazeem\'s website',
			favicon: `${src_dir}/tomatotoaster.ico`,
			template: `${src_dir}/index.html`,
			filename: `${app_dir}/index.html`,
		}),
	],
};

module.exports = config;
