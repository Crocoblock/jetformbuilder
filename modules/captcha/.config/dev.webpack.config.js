const base = require( './base.webpack.config' );
const path = require( 'path' );

module.exports = {
	...base,
	name: 'dev:jfb-captcha',
	mode: 'development',
	output: {
		path: path.resolve( __dirname, '../assets-build/js' ),
		filename: '[name].js',
		devtoolNamespace: 'jfb-captcha',
		clean: {
			keep( asset ) {
				return !/^chunks\/[a-z\-\_]+\.\w+\.js/g.test( asset );
			},
		},
	},
	devtool: 'eval-source-map',
};