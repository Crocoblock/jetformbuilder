const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-form-record',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-form-record',
	},
	devtool: 'eval-source-map',
};