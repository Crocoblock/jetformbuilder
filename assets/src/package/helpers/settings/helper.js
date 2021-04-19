
function globalTab( { slug, element = '', empty = '' } ) {
	const global = JetFormEditorData.global_settings;

	if( ! global ) {
		return empty;
	}

	if ( element ) {
		return ( global[ slug ] && global[ slug ][ element ] ) ? global[ slug ][ element ] : empty;
	}

	return global[ slug ] || empty;
}

export { globalTab };