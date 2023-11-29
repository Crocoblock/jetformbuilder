const base = require( './base.webpack.config' );
module.exports = {
	...base,
	name: 'dev:jfb-jet-plugins',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-jet-plugins',
	},
	devtool: 'eval-source-map',
};