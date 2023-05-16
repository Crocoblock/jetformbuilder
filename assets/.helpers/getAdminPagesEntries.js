const path = require( 'path' );
const fs   = require( 'fs' );

function getIndexFiles( dirPath ) {
	const savePaths = {};

	fs.readdirSync( dirPath ).map( pageDir => {

		const pathPage = path.join( dirPath, pageDir );
		const file     = fs.readdirSync( pathPage ).
			find( file => /^index\.js$/.test( file ) );

		savePaths[ `admin/pages/${ pageDir }` ] = path.join( pathPage,
			file );
	} );

	return savePaths;
}

function getAdminPagesEntries() {
	const pagesPath = path.join( __dirname, '../src/admin/pages' );

	return getIndexFiles( pagesPath );
}

module.exports = {
	getAdminPagesEntries,
};