import dispatchers from './dispatchers';
import { getInnerBlocks } from '../../helpers/blocks/blocks-helper';


const DEFAULT_STATE = {
	functions: [],
	operators: [],
	functionFilters: {
		set_value( item, blockProps ) {
			const { [ 'data-block' ]: clientId } = blockProps;

			return 1 === getInnerBlocks( clientId ).length;
		},
	},
};

export default function ( state = DEFAULT_STATE, action ) {
	const callback = dispatchers[ action?.type ];

	if ( callback ) {
		return callback( state, action );
	}

	return state;
}