const {
	useState,
	useEffect
} = wp.element;

const {
	useSelect,
} = wp.data;


export const getAttrs = actionType => {


	return action.gateway_attrs;
};

export const getActionSettings = actionId => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );
	const actions = JSON.parse( meta._jf_actions );
	const action = actions.find( action => actionId === action.id );

	return ( action && action.settings ) ? action.settings : false;
};