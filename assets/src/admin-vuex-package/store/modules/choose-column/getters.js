export default {
	isChecked: state => id => {
		return state.checked.includes( id );
	},
	isCheckedHead: state => {
		return 'checked' === state.chooseHead;
	},
}