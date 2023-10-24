const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-sanitize-value',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-sanitize-value',
	},
	devtool: 'eval-source-map',
};