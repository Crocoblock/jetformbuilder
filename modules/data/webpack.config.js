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
		devtoolNamespace: 'jfb-data',
		library: {
			name: [ 'jfb', 'data' ],
			type: 'window',
		},
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
			// Do not use together style-loader and mini-css-extract-plugin
			{
				test: /\.p?css$/,
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
