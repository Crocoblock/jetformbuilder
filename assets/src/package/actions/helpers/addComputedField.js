/**
 * @param field
 * @param settings {{
 *     isScoped: Boolean
 * }}
 */
function addComputedField( field, settings = {} ) {
	wp.data.dispatch( 'jet-forms/actions' ).addComputedField( field, settings );
}

export default addComputedField;