const path = require( 'path' );

module.exports = {
	name: 'prod:jfb-ai',
	context: path.resolve( __dirname, '../assets/src' ),
	entry: {
		'editor': './editor/main.js',
		'admin/forms': './admin/forms/main.js',
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
