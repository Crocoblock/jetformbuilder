/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require( 'postcss-nested' ),
		require( 'autoprefixer' ),
		require( 'postcss-minify' ),
	],
};

module.exports = config;