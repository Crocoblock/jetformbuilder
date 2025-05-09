const WPExtractorPlugin = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);
const path              = require( 'path' );
const devMode           = !process.argv.join( ':' ).
	includes( '--mode:production' );

module.exports = {
	context: path.resolve( __dirname, 'assets/src' ),
	entry: {
		'parser': './index.js',
		'admin-ui': '../../admin/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-html-parser',
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
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new WPExtractorPlugin(),
	],
};
