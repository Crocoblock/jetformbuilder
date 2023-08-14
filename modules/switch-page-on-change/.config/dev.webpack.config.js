const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-switch-page-on-change',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-switch-page-on-change',
	},
	devtool: 'eval-source-map',
};