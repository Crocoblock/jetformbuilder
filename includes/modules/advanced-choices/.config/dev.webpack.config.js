const base = require( './base.webpack.config' );
const path = require( 'path' );

module.exports = {
	...base,
	name: 'dev:jfb-advanced-choices',
	mode: 'development',
	output: {
		path: path.resolve( __dirname, '../assets-build/js' ),
		filename: '[name].js',
		devtoolNamespace: 'jfb-advanced-choices',
	},
	devtool: 'eval-source-map',
};