const WPExtractorPlugin = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);
const path              = require( 'path' );
const devMode           = !process.argv.join( ':' ).
	includes( '--mode:production' );

module.exports = {
	context: path.resolve( __dirname, 'assets/src' ),
	entry: {
		'editor': './editor/main',
		'frontend/map.field': './frontend/map.field/main',
		'frontend/listing.options': './frontend/listing.options/main',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-engine',
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		extensions: [ '.js', '.jsx' ],
		alias: {
			'@blocks': path.resolve( __dirname, 'blocks-metadata' ),
		},
	},
	module: {
		rules: [
			{
				test: /\.js(x)?$/,
				use: [
					'babel-loader',
					'@wyw-in-js/webpack-loader',
				],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new WPExtractorPlugin(),
	],
};
