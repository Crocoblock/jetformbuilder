export function isVisible( conditions, context ) {

	if ( ! conditions || ! context ) {
		return true;
	}

	for ( const [ key, value ] of Object.entries( conditions ) ) {

		if ( Array.isArray( value ) ) {

			if ( ! value.includes( context[ key ] ) ) {
				return false;
			}

			continue;
		}

		if ( context[ key ] !== value ) {
			return false;
		}
	}

	return true;
}

export function getContextFromProps( props ) {

	const attrs = props?.attributes || {};
	const supportName = window.crocoStyleEditorData.support_name;
	const stylesContext = attrs?.[ supportName ] || {};

	return {
		...attrs,
		...stylesContext
	};
}
