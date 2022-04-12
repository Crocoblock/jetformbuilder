export default {
	state: () => (
		{
			editedList: {},
			isEnableEdit: false,
			isEditableTable: false,
			hasChanges: false,
		}
	),
	getters: {
		isEnableEdit: state => {
			return state.isEnableEdit;
		},
		isEditableTable: state => {
			return state.isEditableTable;
		},
		hasChanges: state => {
			return state.hasChanges;
		},
		editedList: state => {
			return state.editedList;
		},
	},
	mutations: {
		toggleEditTable( state, value ) {
			state.isEnableEdit = value ?? (
				! state.isEnableEdit
			);
		},
		setEditableTable( state, isEditableTable ) {
			state.isEditableTable = !! isEditableTable;
		},
		revertChanges( state ) {
			state.editedList = {};
			state.hasChanges = false;
		},
	},
};