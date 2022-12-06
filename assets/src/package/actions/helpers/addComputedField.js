function addComputedField( field ) {
	wp.data.dispatch( 'jet-forms/actions' ).addComputedField( field );
}

export default addComputedField;