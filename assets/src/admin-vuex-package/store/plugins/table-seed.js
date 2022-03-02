import { config, setTableSeed } from './functions';

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

		setTableSeed( store, source );
	};
}

export default TableSeedPlugin;