import { getOffset } from './functions';

export default {
	setQueriedPage( { commit, getters, state }, pageNum ) {
		const offset = getOffset( +pageNum, state.queryState.limit );

		const itemTo = offset + state.queryState.limit;

		commit( 'setQueryState', {
			currentPage: +pageNum,
			itemsFrom: offset + 1,
			itemsTo: itemTo > state.queryState.total ? state.queryState.total : itemTo,
		} );
	},
	updateQueryState( { commit, getters, state, dispatch }, newState ) {
		commit( 'setQueryState', newState );
		dispatch( 'setQueriedPage', state.queryState.currentPage );
	},
}