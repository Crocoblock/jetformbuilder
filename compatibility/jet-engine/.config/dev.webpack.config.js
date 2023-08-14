const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-engine',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-engine',
	},
	devtool: 'eval-source-map',
};