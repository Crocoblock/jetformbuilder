import { config } from './functions';

/**
 * @param source
 * @returns {function(*): void}
 * @constructor
 */
function TableSeedPlugin( source = false ) {
	return store => {
		if ( ! source ) {
			source = config();
		}

		const {
			list = [],
			columns = {},
			total,
			actions,
		} = source;

		store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );
		store.commit( 'setList', JSON.parse( JSON.stringify( list ) ) );
		store.commit( 'setActionsList', actions );
		store.commit( 'setTotal', total );
		store.commit( 'setLimit', store.getters.list.length );

		store.dispatch( 'setQueriedPage', 1 );
	};
}

export default TableSeedPlugin;