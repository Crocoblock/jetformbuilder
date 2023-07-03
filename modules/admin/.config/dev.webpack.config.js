const base = require( './base.webpack.config' );
const path = require( 'path' );

module.exports = {
	...base,
	name: 'dev:jfb-admin',
	mode: 'development',
	output: {
		path: path.resolve( __dirname, '../assets/build/js' ),
		filename: '[name].js',
		devtoolNamespace: 'jfb-admin',
	},
	devtool: 'eval-source-map',
};