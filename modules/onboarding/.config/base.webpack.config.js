const path = require( 'path' );

module.exports = {
	name: 'prod:jfb-onboarding',
	context: path.resolve( __dirname, '../assets/src/js' ),
	entry: {
		'editor': './editor/index.js',
	},
	output: {
		path: path.resolve( __dirname, '../assets/build/js' ),
		filename: '[name].js',
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: [ '.js' ],
		alias: {
			'@patterns': path.resolve( __dirname, '../patterns' ),
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
