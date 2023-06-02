const path = require( 'path' );

module.exports = {
	name: 'prod:jfb-booking',
	context: path.resolve( __dirname, '../assets/src/js' ),
	entry: {
		'frontend': './frontend/jet-booking.js',
	},
	output: {
		path: path.resolve( __dirname, '../assets/build/js' ),
		filename: '[name].min.js',
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
