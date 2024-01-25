import BaseAction from '../abstract/BaseAction';
import CurrentActionEditContext from '../context/CurrentActionEditContext';

const {
	      useSelect,
      } = wp.data;

const {
	      useContext,
      } = wp.element;

const getRequestFields = ( { actions, fields } ) => {
	for ( const action of actions ) {
		const {
			      [ action.type ]: current = {},
		      } = action.settings;

		if ( !current.requestFields ) {
			continue;
		}

		for ( const requestField of current.requestFields ) {
			const index = fields.findIndex(
				field => field.value === requestField.name,
			);

			if ( -1 !== index ) {
				continue;
			}

			fields.push( {
				from: action.type,
				id: action.id,
				label: requestField.name,
				value: requestField.name,
				name: requestField.name,
				help: requestField.help,
			} );
		}
	}
};

const processComputedField = ( { computed, action, fields, nameSet } ) => {
	if ( !computed.isSupported( action, fields ) ) {
		return;
	}
	computed.setAction( action );
	computed.hasInList = false;

	const label = computed.getLabel();
	let name    = computed.getName();

	if ( nameSet.has( name ) ) {
		computed.hasInList = true;

		name = computed.getName();
	}

	if ( fields.some( ( { value } ) => value === name ) ) {
		return;
	}

	nameSet.add( name );

	fields.push( {
		from: action.type,
		id: action.id,
		label: label || name,
		value: name,
		name,
		help: computed.getHelp(),
	} );
};

function getComputedFields( { fields, actions, computed, nameSet } ) {
	/**
	 * @type {BaseAction[]}
	 */
	actions = actions.map( item => new BaseAction( item ) );

	for ( const { field: computedField, settings } of computed ) {
		if ( settings?.isScoped ) {
			continue;
		}

		/**
		 * @type {BaseComputedField}
		 */
		const current = new computedField();

		for ( const action of actions ) {
			processComputedField( {
				computed: current,
				action,
				nameSet,
				fields,
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
			name,
			help: current.getHelp(),
		} );
	}
}

function useRequestFields( { returnOnEmptyCurrentAction = true } = {} ) {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	}, [] );

	const actionProps = useContext( CurrentActionEditContext );

	const { currentAction, computedList } = useSelect(
		select => (
			{
				currentAction: select( 'jet-forms/actions' ).getCurrentAction(),
				computedList: select( 'jet-forms/actions' ).getComputedFields(),
			}
		),
		[],
	);

	if ( !actionProps?.actionId && returnOnEmptyCurrentAction ) {
		return [];
	}

	const actions = JSON.parse( meta._jf_actions || '[]' );

	// current action could be empty object
	if ( !Number.isNaN( Number( currentAction?.index ) ) ) {
		actions.splice( currentAction.index );
	}

	const nameSet = new Set();
	const fields  = [];

	for ( const { field: computedField, settings } of computedList ) {
		if ( !settings?.isScoped ) {
			continue;
		}

		/**
		 * @type {BaseComputedField}
		 */
		const current = new computedField();

		processComputedField( {
			computed: current,
			action: currentAction,
			nameSet,
			fields,
		} );
	}

	/**
	 * Should be deprecated
	 *
	 * @type {*[]}
	 */
	getRequestFields( { actions, fields } );

	getComputedFields( {
		fields,
		actions,
		computed: computedList,
		nameSet,
	} );

	return fields;
}

export { getRequestFields, getComputedFields };
export default useRequestFields;