const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-deprecated',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-deprecated',
	},
	devtool: 'eval-source-map',
};