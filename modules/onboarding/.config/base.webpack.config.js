const path = require( 'path' );

module.exports = {
	name: 'prod:jfb-onboarding',
	context: path.resolve( __dirname, '../assets/src' ),
	entry: {
		'editor': './editor/index.js',
		'editor.package': './editor-package/index.js',
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
		alias: {},
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
