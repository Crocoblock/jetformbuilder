const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-woocommerce',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-woocommerce',
	},
	devtool: 'eval-source-map',
};