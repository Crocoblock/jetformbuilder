import { config, setTableSeed } from './functions';

/**
 * @param  source
 * @return {function(*): void}
 * @class
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