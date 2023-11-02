const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-onboarding',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-onboarding',
	},
	devtool: 'eval-source-map',
};