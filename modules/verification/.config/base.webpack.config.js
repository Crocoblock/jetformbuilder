const path  = require( 'path' );

module.exports = {
	name: 'prod:jfb-verification',
	context: path.resolve( __dirname, '../assets/src/js' ),
	entry: {
		'editor': './editor/main.js',
		'admin/form-records': './admin/form-records-page/main.js'
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
