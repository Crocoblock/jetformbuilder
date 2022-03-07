export default {
	chooseHeadValue: state => {
		return state.chooseHead;
	},
	isChecked: state => id => {
		return state.checked.includes( id );
	},
	isCheckedHead: state => {
		return 'checked' === state.chooseHead;
	},
	getChecked: state => {
		return state.checked;
	},
}