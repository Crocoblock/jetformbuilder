export default {
	setList( state, list ) {
		state.list = JSON.parse( JSON.stringify( list ) );
	},

	setColumns( state, columns ) {
		state.columns = JSON.parse( JSON.stringify( columns ) );
	},
};