export default function getActionDisplayName( action = {}, fallbackLabel = '' ) {
	const editorName = action?.editor_name;

	if ( 'string' === typeof editorName && editorName.trim() ) {
		return editorName.trim();
	}

	return fallbackLabel;
}
