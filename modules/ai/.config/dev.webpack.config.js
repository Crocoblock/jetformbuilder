const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-ai',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-ai',
	},
	devtool: 'eval-source-map',
};