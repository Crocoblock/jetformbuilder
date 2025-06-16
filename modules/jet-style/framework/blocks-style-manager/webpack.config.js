const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	resolve: {
		...defaultConfig.resolve,
		fullySpecified: false,
	},
	entry: {
		'editor': path.resolve( __dirname, 'assets/src/editor.js' ),
		//'editor-style': path.resolve( __dirname, 'assets/src/editor-style.scss' ),
	},
	output: {
		path: path.resolve(__dirname, 'assets/build'),
		filename: '[name].js',
	},
};
