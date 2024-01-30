const {
	      mimes,
      } = window.JetFormBuilderParserConfig;

function getMimeType( filename ) {
	let type = false;

	for ( const extPreg in mimes ) {
		if ( !mimes.hasOwnProperty( extPreg ) ) {
			continue;
		}

		const regex = new RegExp( '\.(' + extPreg + ')$', 'i' );

		/**
		 * Do not return too late,
		 * because same file can match multiple extensions
		 */
		if ( filename.match( regex ) ) {
			type = mimes[ extPreg ];
		}
	}

	return type;
}

export default getMimeType;