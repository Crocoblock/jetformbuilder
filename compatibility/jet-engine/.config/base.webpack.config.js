const path = require( 'path' );

module.exports = {
	name: 'prod:jfb-engine',
	context: path.resolve( __dirname, '../assets/src/js' ),
	entry: {
		'editor': './editor/main',
		'frontend/map.field': './frontend/map.field/main',
		'frontend/listing.options': './frontend/listing.options/main',
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
