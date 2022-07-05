const
	path = require( 'path' ),
	fs = require( 'fs' );


function getIndexFiles( dirPath ) {
	const savePaths = {};

	fs.readdirSync( dirPath ).map( pageDir => {

		const pathPage = path.join( dirPath, pageDir );
		const file = fs.readdirSync( pathPage ).find( file => /^index\.js$/.test( file ) );

		savePaths[ `admin/pages/${ pageDir }.js` ] = path.join( pathPage, file );
	} );

	return savePaths;
}

function getAdminPagesEntries() {
	const pagesPath = path.join( __dirname, 'src', 'admin', 'pages' );

	return getIndexFiles( pagesPath );
}

module.exports = {
	getAllEntries() {
		return {
			'frontend-forms-v3.js': './frontend/main.js',
			'editor.js': './editor/main.js',
			'form-block.js': './editor/form-block.js',
			'package.js': './package/manager.js',
			'admin-package.js': './admin-package/manager.js',
			'admin-vuex-package.js': './admin-vuex-package/manager.js',
			...getAdminPagesEntries()
		};
	}
};