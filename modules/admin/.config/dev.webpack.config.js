const base = require( './base.webpack.config' );
module.exports = {
	...base,
	name: 'dev:jfb-admin',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-admin',
	},
	devtool: 'eval-source-map',
};