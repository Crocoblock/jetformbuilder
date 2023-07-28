const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-appointment',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-appointment',
	},
	devtool: 'eval-source-map',
};