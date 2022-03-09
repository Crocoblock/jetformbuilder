import { getPrimaryId } from '../../../functions';

const getters = {
	editedColumn: state => ( column, record ) => {
		const position = getPrimaryId( record );

		if ( ! position || ! state.editedList[ position ]
		     || ! state.editedList[ position ][ column ]
		) {
			throw new Error( 'Column is not edited' );
		}

		return state.editedList[ position ][ column ];
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
	...getters,
	list: state => {
		return state.list;
	},
	editedList: state => {
		return state.editedList;
	},
	editedCellValue: state => ( column, record ) => {
		try {
			return getters.editedColumnProp( state )( column, record, 'value' );
		} catch ( error ) {
			return record[ column ]?.value ?? 'NULL';
		}
	},
	isEnableEdit: state => {
		return state.isEnableEdit;
	},
	isEditableTable: state => {
		return state.isEditableTable;
	},
	hasChanges: state => {
		return state.hasChanges;
	},
	columns: state => {
		return state.columns;
	},
};