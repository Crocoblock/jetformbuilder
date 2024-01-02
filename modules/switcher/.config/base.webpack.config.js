const path  = require( 'path' );

module.exports = {
	name: 'prod:jfb-switcher',
	context: path.resolve( __dirname, '../assets/src' ),
	entry: {
		'editor': './editor/main.js',
		'switcher': './frontend/blocks/switcher/main.js'
	},
	output: {
		path: path.resolve( __dirname, '../assets/build' ),
		filename: '[name].js',
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: [ '.js' ],
		alias: {
			'@root': path.resolve( __dirname, '..' ),
		},
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
