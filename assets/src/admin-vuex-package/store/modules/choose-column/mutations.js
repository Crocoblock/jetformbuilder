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
	addToStore( state, { id } ) {
		state.idList.push( id );
	},
	addChecked( state, { id } ) {
		state.checked.push( id );
	},
	removeAll( state ) {
		state.checked = [];
	},
	activeAll( state ) {
		state.checked = [ ...state.idList ];
	},
	removeChecked( state, { id } ) {
		state.checked = state.checked.filter( checked => (
			checked !== id
		) );
	},
}