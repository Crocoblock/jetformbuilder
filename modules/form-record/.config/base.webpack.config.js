const path = require( 'path' );
const { VueLoaderPlugin }      = require( 'vue-loader' );

module.exports = {
	name: 'prod:jfb-form-record',
	context: path.resolve( __dirname, '../assets-src/js' ),
	entry: {
		'admin/pages/jfb-records': './admin/pages/jfb-records/index',
		'admin/pages/jfb-records-single': './admin/pages/jfb-records-single/index',
	},
	output: {
		path: path.resolve( __dirname, '../assets-build/js' ),
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
