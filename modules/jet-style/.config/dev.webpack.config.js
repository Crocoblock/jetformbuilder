const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-jet-style',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-jet-style',
	},
	devtool: 'eval-source-map',
};