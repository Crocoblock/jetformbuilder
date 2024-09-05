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
		'index': './index.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		extensions: [ '.js', '.jsx', '.scss' ],
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
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new WPExtractorPlugin(),
		new MiniCssExtractPlugin({
			filename: 'index.css', // Name of the extracted CSS file
		}),
	],
};
