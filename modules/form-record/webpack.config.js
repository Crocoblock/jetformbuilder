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
		'admin/pages/jfb-records': './admin/pages/jfb-records/index',
		'admin/pages/jfb-records-single': './admin/pages/jfb-records-single/index',
		'admin/pages/record-print': './admin/pages/record-print/index',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-form-record',
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		extensions: [ '.js', '.vue' ]
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
