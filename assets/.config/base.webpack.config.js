const path                     = require( 'path' );
const webpack                  = require( 'webpack' );
const { VueLoaderPlugin }      = require( 'vue-loader' );
const { getAdminPagesEntries } = require( '../.helpers/getAdminPagesEntries' );

module.exports = {
	name: 'prod:jfb',
	context: path.resolve( __dirname, '..', 'src' ),
	entry: {
		'frontend/main': './frontend/main/main.js',
		'frontend/media.field': './frontend/media.field/main.js',
		'frontend/map.field': './frontend/map.field/main.js',
		'frontend/media.field.restrictions': './frontend/media.field.restrictions/main.js',
		'frontend/multi.step': './frontend/multi.step/main.js',
		'frontend/repeater.field': './frontend/repeater.field/main.js',
		'frontend/calculated.field': './frontend/calculated.field/main.js',
		'frontend/conditional.block': './frontend/conditional.block/main.js',
		'frontend/advanced.reporting': './frontend/advanced.reporting/main.js',
		'frontend/dynamic.value': './frontend/dynamic.value/main.js',
		'frontend/deprecated': './frontend/deprecated/main.js',
		'frontend/jet-appointment': './frontend/compatibility/jet-appointment.js',
		'frontend/jet-booking': './frontend/compatibility/jet-booking.js',
		'frontend/listing.options': './frontend/listing.options/main.js',
		'frontend/hcaptcha': './frontend/hcaptcha/main.js',
		'frontend/friendly.captcha': './frontend/friendly.captcha/main.js',
		'frontend/turnstile': './frontend/turnstile/main.js',
		'editor/form.builder': './editor/main.js',
		'editor/default.builder': './editor/form-block.js',
		'editor/package': './package/manager.js',
		'admin/package': './admin-package/manager.js',
		'admin/vuex.package': './admin-vuex-package/manager.js',
		'frontend/lib/jet.plugins': './frontend/lib/jet.plugins/main.js',
		...getAdminPagesEntries(),
	},
	output: {
		path: path.resolve( __dirname, '..', 'js' ),
		filename: '[name].min.js',
		chunkFilename: 'chunks/[name].[contenthash:8].js',
		clean: {
			keep( asset ) {
				return !/^chunks\/\d+\.\w+\.js$/g.test( asset );
			},
		},
	},
	resolve: {
		modules: [
			path.resolve( __dirname, '..', 'src' ),
			path.resolve( __dirname, '..', 'blocks-src' ),
			'node_modules',
		],
		extensions: [ '.js', '.vue' ],
		alias: {
			'@': path.resolve( __dirname, '..', 'src/editor' ),
			'@helpers': path.resolve( __dirname, '..', 'src/editor/helpers' ),
			'@components': path.resolve( __dirname, '..',
				'src/editor/components' ),
			'@admin': path.resolve( __dirname, '..', 'src/admin' ),
			'@blocks': path.resolve( __dirname, '..', 'blocks-src' ),
		},
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader',
				],
			},
			{
				test: /\.svg/,
				use: {
					loader: 'svg-url-loader',
					options: {},
				},
			},
		],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};