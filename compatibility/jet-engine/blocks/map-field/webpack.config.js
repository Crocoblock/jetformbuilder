const WPExtractorPlugin = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const path    = require( 'path' );
const devMode = !process.argv.join( ':' ).
	includes( '--mode:production' );

module.exports = {
	context: path.resolve( __dirname, 'assets/src' ),
	entry: {
		'editor': './editor/index',
		'frontend/map': './frontend/map.field/index',
		'frontend/autocomplete': './frontend/autocomplete/index',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-engine-map-field',
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		extensions: [ '.js', '.jsx' ],
		alias: {
			'@root': path.resolve( __dirname, './' ),
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
				test: /\.[sp]?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new WPExtractorPlugin(),
		new MiniCssExtractPlugin(),
	],
};
