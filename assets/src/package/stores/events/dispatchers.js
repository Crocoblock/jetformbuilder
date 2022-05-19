import constants from './constants';
import selectors from './selectors';

export default {
	[ constants.register ] ( state, action ) {
		for ( const item of action.items ) {
			item.title = item.label;

			const issetIndex = selectors.getTypeIndex( state, item.value );

			// is new event type
			if ( - 1 === issetIndex ) {
				state.types.push( { ...item } );
			} else {
				state.types[ issetIndex ] = { ...item };
			}
		}

		return state;
	},
};