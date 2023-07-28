const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-advanced-choices',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-advanced-choices',
	},
	devtool: 'eval-source-map',
};