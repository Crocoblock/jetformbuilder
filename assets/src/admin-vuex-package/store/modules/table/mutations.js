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
		state.isEditedTable = ! state.isEditedTable;
	},

};