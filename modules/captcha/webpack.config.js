const WPExtractorPlugin = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);
const path              = require( 'path' );
const devMode           = !process.argv.join( ':' ).
	includes( '--mode:production' );

module.exports = {
	context: path.resolve( __dirname, 'assets/src' ),
	entry: {
		'editor': './editor/main',
		'editor.package': './editor-package/main',
		'hcaptcha/frontend': './hcaptcha/frontend/main.js',
		'friendly.captcha/frontend': './friendly.captcha/frontend/main.js',
		'turnstile/frontend': './turnstile/frontend/main.js',
		're-captcha-v3/frontend': './re-captcha-v3/frontend/main.js',
		'hcaptcha/editor': './hcaptcha/editor/main.js',
		'friendly.captcha/editor': './friendly.captcha/editor/main.js',
		'turnstile/editor': './turnstile/editor/main.js',
		're-captcha-v3/editor': './re-captcha-v3/editor/main.js',
	},
	output: {
		path: path.resolve( __dirname, 'assets/build' ),
		devtoolNamespace: 'jfb-captcha',
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		extensions: [ '.js', '.jsx' ],
		alias: {
			'@blocks': path.resolve( __dirname, 'blocks-metadata' ),
		},
	},
	module: {
		rules: [
			{
				test: /\.js(x)?$/,
				use: [
					'babel-loader',
					'@wyw-in-js/webpack-loader',
				],
				exclude: /node_modules/,
			},
			// Do not use together style-loader and mini-css-extract-plugin
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new WPExtractorPlugin(),
	],
};
