const base = require( './base.webpack.config' );
const path = require( 'path' );

module.exports = {
	...base,
	name: 'dev:jfb-switch-page-on-change',
	mode: 'development',
	output: {
		path: path.resolve( __dirname, '../assets-build/js' ),
		filename: '[name].js',
		devtoolNamespace: 'jfb-switch-page-on-change',
	},
	devtool: 'eval-source-map',
};