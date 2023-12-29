/**
 * @param field
 * @param settings {{
 *     isScoped: boolean|undefined
 *     priority: number|undefined
 * }}
 */
function addComputedField( field, settings = {} ) {
	wp.data.dispatch( 'jet-forms/actions' ).addComputedField( field, settings );
}

export default addComputedField;