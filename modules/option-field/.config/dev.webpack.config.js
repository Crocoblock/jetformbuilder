const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-option-field',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-option-field',
	},
	devtool: 'eval-source-map',
};