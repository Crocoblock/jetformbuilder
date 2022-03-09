import { getPrimaryId } from '../../../functions';

const getEditableColumn = ( state, column, record ) => {
	const position = getPrimaryId( record );

	if ( ! position ) {
		throw new Error( 'Empty primary column' );
	}
	state.editedList[ position ] = state.editedList[ position ] || {};

	return [ state.editedList[ position ][ column ] || {}, position ];
};

const mutations = {
	updateEditableCell( state, { column, props, record } ) {
		let position, columnPair;

		try {
			[ columnPair, position ] = getEditableColumn( state, column, record );
		} catch ( error ) {
			return;
		}

		state.editedList[ position ] = {
			...state.editedList[ position ],
			[ column ]: {
				...columnPair,
				...props,
			},
		};
		state.hasChanges = true;
	},
};

export default {
	...mutations,
	setList( state, list ) {
		state.list = JSON.parse( JSON.stringify( list ) );
	},
	setColumns( state, columns ) {
		state.columns = JSON.parse( JSON.stringify( columns ) );
	},
	toggleEditTable( state ) {
		state.isEnableEdit = ! state.isEnableEdit;
	},
	setEditableTable( state, isEditableTable ) {
		state.isEditableTable = !! isEditableTable;
	},
	revertChangesColumn( state, { column, record } ) {
		let position, columnPair;

		try {
			[ columnPair, position ] = getEditableColumn( state, column, record );
		} catch ( error ) {
			return;
		}

		Vue.delete( state.editedList[ position ], column );

		const currentColumns = Object.keys( state.editedList[ position ] );

		if ( ! currentColumns.length ) {
			Vue.delete( state.editedList, position );

			if ( ! Object.keys( state.editedList ).length ) {
				state.hasChanges = false;
			}
		}
	},
	revertChanges( state ) {
		state.editedList = {};
		state.hasChanges = false;
	},
};