const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = {
	name: 'js_bundle',
	context: path.resolve(__dirname, 'src'),
	entry: {
		'editor.js': './editor/main.js',
		'form-block.js': './editor/form-block.js',
		'package.js': './package/manager.js',
		'admin.js': './admin/main.js'
	},
	output: {
		path: path.resolve( __dirname, 'js' ),
		filename: '[name]'
	},
	devtool: 'inline-cheap-module-source-map',
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'blocks-src'),
			'node_modules'
		],
		extensions: [ '.js', '.vue' ],
		alias: {
			'@': path.resolve(__dirname, 'src/editor'),
			'@helpers': path.resolve(__dirname, 'src/editor/helpers'),
			'@components': path.resolve(__dirname, 'src/editor/components'),
			'@admin': path.resolve(__dirname, 'src/admin'),
			'@blocks': path.resolve(__dirname, 'blocks-src'),
		}
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				],
			},
		]
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	}
}