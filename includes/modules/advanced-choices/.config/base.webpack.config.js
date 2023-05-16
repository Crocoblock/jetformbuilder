const path  = require( 'path' );

module.exports = {
	name: 'prod:jfb-advanced-choices',
	context: path.resolve( __dirname, '../assets-src/js' ),
	entry: {
		'frontend/choices.field': './frontend/choices.field/main.js',
		'editor/main': './editor/main.js',
		'editor-not-supported/main': './editor-not-supported/main.js',
	},
	output: {
		path: path.resolve( __dirname, '../assets-build/js' ),
		filename: '[name].min.js',
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: [ '.js' ],
		alias: {
			'@blocks': path.resolve( __dirname, '../blocks-metadata' ),
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
