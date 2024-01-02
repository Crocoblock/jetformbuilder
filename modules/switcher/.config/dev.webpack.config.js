const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-switcher',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-switcher',
	},
	devtool: 'eval-source-map',
};