const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb',
	mode: 'development',
	output: {
		...base.output,
		filename: '[name].js',
		devtoolNamespace: 'jfb',
		clean: {
			keep( asset ) {
				return !/^chunks\/[a-z\-\_]+\.\w+\.js/g.test( asset );
			},
		},
	},
	devtool: 'eval-source-map',
};