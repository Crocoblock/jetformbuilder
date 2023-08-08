const path = require( 'path' );

module.exports = {
	name: 'prod:jfb-woocommerce',
	context: path.resolve( __dirname, '../assets/src/js' ),
	entry: {
		'editor': './editor/main',
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
