import { dispatch } from '@wordpress/data';
import { STORE_NAME } from '../store';

/**
 * @param field
 * @param settings {{
 *     isScoped: boolean|undefined
 *     priority: number|undefined
 * }}
 */
function addComputedField( field, settings = {} ) {
	dispatch( STORE_NAME ).addComputedField( field, settings );
}

//backward compatibility
window.JetFBActions                  = window.JetFBActions ?? {};
window.JetFBActions.addComputedField = addComputedField;

export default addComputedField;