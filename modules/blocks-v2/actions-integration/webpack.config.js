const WPExtractorPlugin = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);
const path              = require( 'path' );
const devMode           = !process.argv.join( ':' ).
	includes( '--mode:production' );

module.exports = {
	context: path.resolve( __dirname, 'assets/src' ),
	entry: {
		'editor': './index.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-blocks-to-actions',
		library: {
			name: [ 'jfb', 'blocksToActions' ],
			type: 'window',
		},
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
		],
	},
	plugins: [
		new WPExtractorPlugin(),
	],
	externalsType: 'window',
	externals: {
		'jet-form-builder-components': [ 'jfb', 'components' ],
		'jet-form-builder-data': [ 'jfb', 'data' ],
		'jet-form-builder-actions': [ 'jfb', 'actions' ],
	},
};
