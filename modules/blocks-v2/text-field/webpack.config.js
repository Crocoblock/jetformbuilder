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
		'frontend/field': './frontend/field/index.js',
		'frontend/field.mask': './frontend/field.mask/index.js',
		'editor': './editor/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-text-field',
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
				test: /\.s?css$/,
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
