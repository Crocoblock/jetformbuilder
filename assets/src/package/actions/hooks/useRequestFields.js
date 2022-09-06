const {
	      useSelect,
      } = wp.data;

const getRequestFields = actions => {
	const requestFields = [];

	for ( const action of actions ) {
		const {
			      [ action.type ]: current = {},
		      } = action.settings;

		if ( !current.requestFields ) {
			continue;
		}

		for ( const requestField of current.requestFields ) {
			const index = requestFields.findIndex(
				field => field.value === requestField.name );

			if ( -1 !== index ) {
				continue;
			}

			requestFields.push( {
				from: action.type,
				id: action.id,
				label: requestField.name,
				value: requestField.name,
				name: requestField.name,
				help: requestField.help,
			} );
		}
	}

	return requestFields;
};

function useRequestFields() {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	}, [] );

	const actions = JSON.parse( meta._jf_actions || '[]' );

	const currentAction = useSelect(
		select => select( 'jet-forms/actions' ).getCurrentAction(),
		[],
	);

	actions.splice( currentAction.index );

	return getRequestFields( actions );
}

export { getRequestFields };
export default useRequestFields;