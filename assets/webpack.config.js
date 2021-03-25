const path = require('path');
const webpack = require('webpack');

module.exports = {
	name: 'js_bundle',
	context: path.resolve(__dirname, 'src'),
	entry: {
		'editor.js': './editor/main.js',
		'form-block.js': './editor/form-block.js',
		'package.js': './package/manager.js'
	},
	output: {
		path: path.resolve( __dirname, 'js' ),
		filename: '[name]'
	},
	devtool: 'inline-cheap-module-source-map',
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
		extensions: ['.js'],
		alias: {
			'@': path.resolve(__dirname, 'src/editor'),
			'@helpers': path.resolve(__dirname, 'src/editor/helpers'),
			'@components': path.resolve(__dirname, 'src/editor/components'),
		}
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery'
		})
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	}
}