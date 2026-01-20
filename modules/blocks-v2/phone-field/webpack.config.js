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
		'editor/index': './editor/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-phone-field',
		chunkFilename: ( pathData ) => {
			// Place i18n chunks in frontend/i18n/ subfolder
			if ( pathData.chunk.name && pathData.chunk.name.startsWith( 'phone-i18n-' ) ) {
				return 'frontend/i18n/[name].js';
			}
			// Other chunks go to frontend/
			return 'frontend/[name].js';
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
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new WPExtractorPlugin(),
		new MiniCssExtractPlugin(),
	],
};
