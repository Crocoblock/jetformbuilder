import BaseAction from '../abstract/BaseAction';

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

function getComputedFields( fields, actions ) {
	const computed = useSelect(
		select => select( 'jet-forms/actions' ).getComputedFields(),
		[],
	);

	/**
	 * @type {BaseAction[]}
	 */
	actions = actions.map( item => new BaseAction( item ) );
	const nameSet = new Set();

	for ( const baseComputedField of computed ) {
		/**
		 * @type {BaseComputedField}
		 */
		const current = new baseComputedField();

		for ( let action of actions ) {
			if ( !current.isSupported( action ) ) {
				continue;
			}
			current.setAction( action );
			current.hasInList = false;

			const label = current.getLabel();
			let name    = current.getName();

			if ( nameSet.has( name ) ) {
				current.hasInList = true;

				name = current.getName();
			}

			if ( fields.some( ( { value } ) => value === name ) ) {
				continue;
			}

			nameSet.add( name );

			fields.push( {
				from: action.type,
				id: action.id,
				label: label || name,
				value: name,
				name: name,
				help: current.getHelp(),
			} );
		}

		if ( current.action || !current.isSupportedGlobal() ) {
			continue;
		}
		const label = current.getLabel();
		const name  = current.getName();

		fields.push( {
			label: label || name,
			value: name,
			name: name,
			help: current.getHelp(),
		} );
	}

	return fields;
}

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

	/**
	 * Should be deprecated
	 *
	 * @type {*[]}
	 */
	const fields = getRequestFields( actions );

	return getComputedFields( fields, actions );
}

export { getRequestFields, getComputedFields };
export default useRequestFields;