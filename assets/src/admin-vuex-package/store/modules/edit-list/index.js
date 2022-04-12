import editBase from '../edit-base';

const getters = {
	editedColumn: state => column => {
		const { base } = state;

		if ( ! base.editedList[ column ] ) {
			throw new Error( 'Column is not edited' );
		}

		return base.editedList[ column ];
	},
	editedColumnProp: state => ( column, prop ) => {
		const result = getters.editedColumn( state )( column )[ prop ] ?? false;

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
		editedCellValue: state => ( column, initialValue ) => {
			try {
				return getters.editedColumnProp( state )( column, 'value' );
			} catch ( error ) {
				return initialValue ?? 'NULL';
			}
		},
	},
	mutations: {
		updateEditableCell( state, { column, props } ) {
			const { base } = state;
			const columnPair = base.editedList[ column ] || {};

			base.editedList[ column ] = {
				...columnPair,
				...props,
			};
			base.hasChanges = true;
		},
		revertChangesColumn( state, { column } ) {
			const { base } = state;

			Vue.delete( base.editedList, column );

			if ( ! Object.keys( base.editedList ).length ) {
				base.hasChanges = false;
			}
		},
	},
};