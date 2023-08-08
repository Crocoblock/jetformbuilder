const base = require( './base.webpack.config' );

module.exports = {
	...base,
	name: 'dev:jfb-captcha',
	mode: 'development',
	output: {
		...base.output,
		devtoolNamespace: 'jfb-captcha',
		clean: {
			keep( asset ) {
				return !/^chunks\/[a-z\-\_]+\.\w+\.js/g.test( asset );
			},
		},
	},
	devtool: 'eval-source-map',
};