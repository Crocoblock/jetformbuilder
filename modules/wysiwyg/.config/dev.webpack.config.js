const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-wysiwyg',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-wysiwyg',
	},
	devtool: 'eval-source-map',
};