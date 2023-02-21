import constants from './constants';
import { storeName } from './index';

const dispatchers = {
	[ constants.setBlocks ]( state, action ) {
		const recentlyAdded = [];

		for ( const blockMapKey in action.blockMap ) {
			if ( !action.blockMap.hasOwnProperty( blockMapKey ) ||
				state.blockMap.hasOwnProperty( blockMapKey )
			) {
				continue;
			}
			recentlyAdded.push( blockMapKey );
		}

		return {
			...state,
			blocks: action.blocks,
			blockMap: action.blockMap,
			recentlyAdded,
		};
	},
	[ constants.setBlocksFirst ]( state, action ) {
		return {
			...state,
			blocks: action.blocks,
			blockMap: action.blockMap,
		};
	},
	[ constants.toggleExecute ]( state ) {
		return {
			...state,
			executed: true,
		};
	},
};

export default {
	...dispatchers,
};