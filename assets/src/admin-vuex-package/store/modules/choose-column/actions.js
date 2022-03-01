export default {
	changeChecked( { commit }, { id, active } ) {
		if ( active ) {
			commit( 'addChecked', { id } );
		} else {
			commit( 'removeChecked', { id } );
		}
	},
}