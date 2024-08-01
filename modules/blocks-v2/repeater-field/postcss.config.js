/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require( 'autoprefixer' ),
		require( 'postcss-nested' ),
		require( 'postcss-minify' ),
	],
};

module.exports = config;