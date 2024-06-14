const WPExtractorPlugin   = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);
const path                = require( 'path' );
const { VueLoaderPlugin } = require( 'vue-loader' );
const devMode             = !process.argv.join( ':' ).
	includes( '--mode:production' );

module.exports = {
	context: path.resolve( __dirname, 'assets/src' ),
	entry: {
		'editor': './editor/main.js',
		'admin/jfb-settings': './admin/jfb-settings/main.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-active-campaign',
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		extensions: [ '.js', '.vue', '.jsx' ],
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
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader',
				],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new WPExtractorPlugin(),
	],
};
