const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-gateways',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-gateways',
	},
	devtool: 'eval-source-map',
};