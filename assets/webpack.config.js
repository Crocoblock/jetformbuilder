const path                     = require( 'path' );
const { VueLoaderPlugin }      = require( 'vue-loader' );
const { getAdminPagesEntries } = require( './.helpers/getAdminPagesEntries' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const devMode = !process.argv.join( ':' ).
	includes( '--mode:production' );

const WPExtractorPlugin = require(
	'@wordpress/dependency-extraction-webpack-plugin',
);

module.exports = {
	context: path.resolve( __dirname, 'src' ),
	entry: {
		'frontend/main': './frontend/main/main.js',
		'frontend/media.field': './frontend/media.field/main.js',
		'frontend/media.field.restrictions': './frontend/media.field.restrictions/main.js',
		'frontend/multi.step': './frontend/multi.step/main.js',
		'frontend/repeater.field': './frontend/repeater.field/main.js',
		'frontend/calculated.field': './frontend/calculated.field/main.js',
		'frontend/conditional.block': './frontend/conditional.block/main.js',
		'frontend/advanced.reporting': './frontend/advanced.reporting/main.js',
		'frontend/dynamic.value': './frontend/dynamic.value/main.js',
		'editor/form.builder': './editor/main.js',
		'editor/default.builder': './editor/form-block.js',
		'editor/package': './package/manager.js',
		'admin/package': './admin-package/manager.js',
		'admin/vuex.package': './admin-vuex-package/manager.js',
		...getAdminPagesEntries(),
	},
	output: {
		path: path.resolve( __dirname, 'build' ),
		devtoolNamespace: 'jfb',
	},
	devtool: devMode ? 'inline-cheap-module-source-map' : false,
	resolve: {
		modules: [
			path.resolve( __dirname, 'src' ),
			path.resolve( __dirname, 'blocks-src' ),
			'node_modules',
		],
		extensions: [ '.js', '.jsx', '.vue' ],
		alias: {
			'@': path.resolve( __dirname, 'src/editor' ),
			'@helpers': path.resolve( __dirname, 'src/editor/helpers' ),
			'@components': path.resolve( __dirname, 'src/editor/components' ),
			'@admin': path.resolve( __dirname, 'src/admin' ),
			'@blocks': path.resolve( __dirname, 'blocks-src' ),
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
				test: /\.pcss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new WPExtractorPlugin(),
		new MiniCssExtractPlugin(),
	],
};
