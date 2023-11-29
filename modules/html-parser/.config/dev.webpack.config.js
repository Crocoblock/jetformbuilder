const base = require( './base.webpack.config' );
module.exports = {
	...base,
	name: 'dev:jfb-html-parser',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-html-parser',
	},
	devtool: 'eval-source-map',
};