import { getRequestFields, getComputedFields } from './useRequestFields';

function withRequestFields( select ) {
	const meta          = select( 'core/editor' ).
		getEditedPostAttribute( 'meta' ) || {};
	const actions       = JSON.parse( meta._jf_actions || '[]' );
	const currentAction = select( 'jet-forms/actions' ).getCurrentAction();
	const computed      = select( 'jet-forms/actions' ).getComputedFields();

	actions.splice( currentAction.index );

	const fields = getRequestFields( actions );

	return { requestFields: getComputedFields( fields, actions, computed ) };
}

export default withRequestFields;