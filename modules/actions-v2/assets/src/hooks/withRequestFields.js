import { getRequestFields, getComputedFields } from './useRequestFields';
import { STORE_NAME } from '../store';

function withRequestFields( select ) {
	const meta          = select( 'core/editor' ).
		getEditedPostAttribute( 'meta' ) || {};
	const actions       = JSON.parse( meta._jf_actions || '[]' );
	const currentAction = select( STORE_NAME ).getCurrentAction();
	const computed      = select( STORE_NAME ).getComputedFields();

	actions.splice( currentAction.index );

	const fields  = [];
	const nameSet = new Set();

	getRequestFields( { actions, fields } );
	getComputedFields( { fields, actions, computed, nameSet } );

	return { requestFields: fields };
}

// backward compatibility
window.JetFBHooks                   = window.JetFBHooks ?? {};
window.JetFBHooks.withRequestFields = withRequestFields;

export default withRequestFields;