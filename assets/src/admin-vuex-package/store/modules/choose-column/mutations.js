export default {
	toggleHead( state ) {
		state.chooseHead = state.chooseHead ? '' : 'checked';
	},
	unChooseHead( state ) {
		state.chooseHead = '';
	},
	chooseHead( state ) {
		state.chooseHead = 'checked';
	},
	addChecked( state, { id } ) {
		state.checked.push( id );
	},
	setChecked( state, payload = [] ) {
		state.checked = payload;
	},
	removeChecked( state, { id } ) {
		state.checked = state.checked.filter( checked => (
			checked !== id
		) );
	},
}