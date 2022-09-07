function SanitizeFieldName( name ) {
	return name.replace( /[^\w\-]/gi, '' );
}

export default SanitizeFieldName;