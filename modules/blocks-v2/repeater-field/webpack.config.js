const WPExtractorPlugin = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);

// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const path = require( 'path' );
const devMode = !process.argv.join( ':' ).includes( '--mode:production' );

module.exports = {
	context: path.resolve( __dirname, 'assets/src' ),
	entry: {
		'frontend': './frontend/index.js',
		'editor': './editor/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-repeater-field',
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		extensions: [ '.js', '.jsx' ],
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
				test: /\.pcss$/,
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
