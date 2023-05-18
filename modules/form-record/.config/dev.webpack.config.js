const base = require( './base.webpack.config' );
const path = require( 'path' );

module.exports = {
	...base,
	name: 'dev:jfb-form-record',
	mode: 'development',
	output: {
		path: path.resolve( __dirname, '../assets-build/js' ),
		filename: '[name].js',
		devtoolNamespace: 'jfb-form-record',
	},
	devtool: 'eval-source-map',
};