const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-booking',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-booking',
	},
	devtool: 'eval-source-map',
};