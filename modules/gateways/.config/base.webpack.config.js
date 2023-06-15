const path                = require( 'path' );
const { VueLoaderPlugin } = require( 'vue-loader' );

module.exports = {
	name: 'prod:jfb-gateways',
	context: path.resolve( __dirname, '../assets/src/js' ),
	entry: {
		'editor': './editor/main.js',
		'admin/pages/jfb-payments': './admin/pages/jfb-payments/index',
		'admin/pages/jfb-payments-single': './admin/pages/jfb-payments-single/index',
		'admin/pages/payment-print': './admin/pages/payment-print/index',
	},
	output: {
		path: path.resolve( __dirname, '../assets/build/js' ),
		filename: '[name].min.js',
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: [ '.js', '.vue' ],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
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
};
