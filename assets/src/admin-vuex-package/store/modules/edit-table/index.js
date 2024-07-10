import editBase from '../edit-base';
import { getPrimaryId } from '../../../functions';


const getEditableColumn = ( state, column, record ) => {
	const position = getPrimaryId( record );
	const { base } = state;

	if ( ! position ) {
		throw new Error( 'Empty primary column' );
	}
	base.editedList[ position ] = base.editedList[ position ] || {};

	return [ base.editedList[ position ][ column ] || {}, position ];
};

const getters = {
	editedColumn: state => ( column, record ) => {
		const position = getPrimaryId( record );
		const { base } = state;

		if ( ! position || ! base.editedList[ position ]
		     || ! base.editedList[ position ][ column ]
		) {
			throw new Error( 'Column is not edited' );
		}

		return base.editedList[ position ][ column ];
	},
	editedColumnProp: state => ( column, record, prop ) => {
		const result = getters.editedColumn( state )( column, record )[ prop ] ?? false;

		if ( false === result ) {
			throw new Error( 'Prop is not defined' );
		}

		return result;
	},
};

export default {
	modules: {
		base: editBase,
	},
	getters: {
		...getters,
		editedCellValue: state => ( column, record ) => {
			try {
				return getters.editedColumnProp( state )( column, record, 'value' );
			} catch ( error ) {
				return record[ column ]?.value ?? 'NULL';
			}
		},
		editedListValues: state => {
			const values = {};

			const { base } = state;

			for ( const [ position, currentRow ] of Object.entries( base.editedList ) ) {
				const row = {};

				for ( const [ column, { value } ] of Object.entries( currentRow ) ) {
					row[ column ] = value;
				}

				values[ position ] = row;
			}

			return values;
		},
	},
	mutations: {
		updateEditableCell( state, { column, props, record } ) {
			let position, columnPair;
			const { base } = state;

			try {
				[ columnPair, position ] = getEditableColumn( state, column, record );
			} catch ( error ) {
				return;
			}

			base.editedList[ position ] = {
				...base.editedList[ position ],
				[ column ]: {
					...columnPair,
					...props,
				},
			};
			base.hasChanges = true;
		},
		revertChangesColumn( state, { column, record } ) {
			let position;
			const { base } = state;

			try {
				[ , position ] = getEditableColumn( state, column, record );
			} catch ( error ) {
				return;
			}

			Vue.delete( base.editedList[ position ], column );

			const currentColumns = Object.keys( base.editedList[ position ] );

			if ( ! currentColumns.length ) {
				Vue.delete( base.editedList, position );

				if ( ! Object.keys( base.editedList ).length ) {
					base.hasChanges = false;
				}
			}
		},
	},
};