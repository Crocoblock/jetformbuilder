import constants from './constants';
import getPreparedBlocks from './getPreparedBlocks';
import { storeName } from './index';

const {
	      select,
	      dispatch,
      } = wp.data;

export default {
	setBlocks( action = null ) {
		if ( null === action ) {
			action = getPreparedBlocks();
		}

		const hasExecuted = select( storeName ).isExecuted();

		if ( !hasExecuted ) {
			dispatch( storeName ).toggleExecute();
		}

		return {
			type: hasExecuted ? constants.setBlocks : constants.setBlocksFirst,
			blocks: action.blocks,
			blockMap: action.blockMap,
		};
	},
	toggleExecute() {
		return {
			type: constants.toggleExecute,
		};
	},
};