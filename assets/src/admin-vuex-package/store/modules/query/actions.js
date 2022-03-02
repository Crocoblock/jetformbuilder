import { getOffset } from './functions';

export default {
	setQueryState( { commit, getters, state }, newState ) {
		if ( 'currentPage' in newState ) {
			commit( 'setCurrentPage', newState.currentPage );
		}
		if ( 'total' in newState ) {
			commit( 'setTotal', newState.total );
		}
		if ( 'limit' in newState ) {
			commit( 'setLimit', newState.limit );
		}
	},
	setQueriedPage( { commit, getters, state }, pageNum ) {
		const offset = getOffset( +pageNum, state.limit );

		commit( 'setCurrentPage', pageNum );
		commit( 'setOffset', offset );
	},
	updateQueryState( { commit, getters, state, dispatch }, page = false ) {
		dispatch( 'setQueriedPage', page || state.currentPage );
	},
}