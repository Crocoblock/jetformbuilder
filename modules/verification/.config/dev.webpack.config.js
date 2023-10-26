const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-verification',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-verification',
	},
	devtool: 'eval-source-map',
};