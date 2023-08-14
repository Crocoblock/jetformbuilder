const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-active-campaign',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-active-campaign',
	},
	devtool: 'eval-source-map',
};