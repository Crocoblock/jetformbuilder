const path  = require( 'path' );

module.exports = {
	name: 'prod:jfb-wysiwyg',
	context: path.resolve( __dirname, '../assets/src' ),
	entry: {
		'editor': './editor/main.js',
		'wysiwyg': './frontend/blocks/wysiwyg/main.js'
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
