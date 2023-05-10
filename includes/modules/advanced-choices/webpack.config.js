const path  = require( 'path' );
const isDev = process.env.npm_lifecycle_event === 'dev';

module.exports = {
	name: 'js_bundle',
	context: path.resolve( __dirname, 'assets-src/js' ),
	entry: {
		'frontend/choices.field': './frontend/choices.field/main.js',
		'editor/main': './editor/main.js',
		'editor-not-supported/main': './editor-not-supported/main.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets-build/js' ),
		filename: isDev ? '[name].js' : '[name].min.js',
		devtoolNamespace: 'jfb-advanced-choices',
	},
	devtool: 'eval-source-map',
	resolve: {
		modules: [
			path.resolve( __dirname, 'src' ),
			'node_modules',
		],
		extensions: [ '.js' ],
		alias: {
			'@blocks': path.resolve( __dirname, 'blocks-metadata' ),
		},
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
