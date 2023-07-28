const path  = require( 'path' );

module.exports = {
	name: 'prod:jfb-switch-page-on-change',
	context: path.resolve( __dirname, '../assets-src/js' ),
	entry: {
		'editor/main': './editor/main.js',
		'frontend/main': './frontend/main.js',
	},
	output: {
		path: path.resolve( __dirname, '../assets-build/js' ),
		filename: '[name].js',
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: [ '.js' ],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
