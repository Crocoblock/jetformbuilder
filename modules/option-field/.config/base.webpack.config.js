const path = require( 'path' );

module.exports = {
	name: 'prod:jfb-option-field',
	context: path.resolve( __dirname, '../assets/src' ),
	entry: {
		'editor': './editor/main.js',
		'select': './frontend/blocks/select/main.js',
		'checkbox': './frontend/blocks/checkbox/main.js',
		'radio': './frontend/blocks/radio/main.js',
		'custom.options.restrictions': './frontend/custom.options.restrictions/main.js',
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
			'@shared': path.resolve( __dirname, '../shared' ),
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
