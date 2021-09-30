let gulp    = require( 'gulp' ),
	po2json = require( 'po2json' ),
	path    = require( 'path' ),
	fs      = require( 'fs' ),
	Jed     = require( 'jed' ),
	Write   = require( 'write' );

const langPath = ( file = '' ) => path.join( __dirname, '../languages', file );

function getPOFiles( path ) {
	return new Promise( ( resolve, reject ) => {
		fs.readdir( path, function( err, files ) {
			//handling error
			if ( err ) {
				return console.log( 'Unable to scan directory: ' + err );
			}
			resolve( files
				.filter( file => /^.*\.po$/.test( file ) )
				.map( file => langPath( '/' + file ) ),
			);
		} );
	} );
}

function getArgv( name, ifNotExist = false ) {
	const argIndex = process.argv.indexOf( name );
	if ( -1 === argIndex ) {
		return ifNotExist;
	}

	return process.argv[ argIndex + 1 ] || ifNotExist;
}

const taskJFBi18n = async () => {
	const handlers = [ 'jfb-settings', 'jfb-addons', 'jet-form-builder-editor-package' ];

	const parseI18nJson = ( err, jsonData, handler, PO_file ) => {

		let i18n = new Jed( jsonData )
		let JSON_file = PO_file.replace( '.po', `-${ handler }.json` )

		let locale_data = i18n.options.locale_data;

		for ( const message in locale_data.messages ) {
			if ( ! message || ! Array.isArray( locale_data.messages[ message ] ) ) {
				continue;
			}

			locale_data.messages[ message ] = locale_data.messages[ message ].filter( translate => {
				return ( "" === translate || translate );
			} )
		}

		Write.sync( JSON_file, JSON.stringify( { locale_data }, null, 4 ), { newline: true } )
	};

	function writeJSONby( main_PO_file ) {
		handlers.forEach( handler => {
			po2json.parseFile(
				main_PO_file,
				{ format: 'jed' },
				( err, jsonData ) => parseI18nJson( err, jsonData, handler, main_PO_file ),
			);
		} );
	}

	const files = await getPOFiles( langPath() );

	console.log( files );

	files.forEach( writeJSONby );
}

gulp.task( 'jfb-i18n', taskJFBi18n );

gulp.task( 'jfb-i18n-watch', async () => {
	gulp.watch(  '../languages/*.po' , taskJFBi18n );
} );

