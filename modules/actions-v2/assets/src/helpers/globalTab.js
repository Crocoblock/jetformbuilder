function globalTab( { slug, element = '', empty = '' } ) {
	const global = JetFormEditorData.global_settings;

	if ( !global ) {
		return empty;
	}

	if ( element ) {
		return (
			       global[ slug ] && global[ slug ][ element ]
		       ) ? global[ slug ][ element ] : empty;
	}

	return global[ slug ] || empty;
}

// backward compatibility
window.JetFBActions           = window.JetFBActions ?? {};
window.JetFBActions.globalTab = globalTab;

export default globalTab;