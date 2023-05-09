const path  = require( 'path' );
const isDev = process.env.npm_lifecycle_event === 'dev';

module.exports = {
	name: 'js_bundle',
	context: path.resolve( __dirname, 'assets-src/js' ),
	entry: {
		'editor/main': './editor/main.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets-build/js' ),
		filename: isDev ? '[name].js' : '[name].min.js',
		devtoolNamespace: 'jfb',
	},
	devtool: 'eval-source-map',
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: [ '.js' ],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};

if ( !isDev ) {
	delete module.exports.devtool;
}
