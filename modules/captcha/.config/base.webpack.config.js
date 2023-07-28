const path  = require( 'path' );

module.exports = {
	name: 'prod:jfb-captcha',
	context: path.resolve( __dirname, '../assets-src/js' ),
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
		path: path.resolve( __dirname, '../assets-build/js' ),
		filename: '[name].js',
		chunkFilename: 'chunks/[id].[contenthash:8].js',
		clean: {
			keep( asset ) {
				return !/^chunks\/\d+\.\w+\.js$/g.test( asset );
			},
		},
	},
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: [ '.js' ],
		alias: {
			'@blocks': path.resolve( __dirname, '../blocks-metadata' ),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
