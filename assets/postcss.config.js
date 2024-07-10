/* eslint-disable import/no-extraneous-dependencies */

/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [
		require( 'postcss-import' ),
		require( 'postcss-mixins' ),
		require( 'postcss-simple-vars' ),
		require( 'postcss-nested' ),
		require( 'autoprefixer' ),
		require( 'postcss-minify' ),
	],
};

module.exports = config;