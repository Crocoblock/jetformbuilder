import constants from './constants';
import selectors from './selectors';

const transform = sanitizer => {
	if ( 'object' === typeof sanitizer ) {
		return sanitizer;
	}

	return 'string' === typeof sanitizer
	       ? { value: sanitizer, label: sanitizer }
	       : sanitizer;
};

export default {
	[ constants.register ]( state, action ) {
		if ( !Array.isArray( action.items ) ) {
			action.items = [ action.items ];
		}

		for ( let item of action.items ) {
			item = transform( item );

			if ( !item.hasOwnProperty( 'value' ) ) {
				continue;
			}

			const issetIndex = selectors.getTypeIndex( state, item.value );

			// is new event type
			if ( -1 === issetIndex ) {
				state.types.push( { ...item } );
			}
			else {
				state.types[ issetIndex ] = {
					...state.types[ issetIndex ],
					...item,
				};
			}
		}

		return state;
	},
	[ constants.unRegister ]( state, action ) {
		const { types } = action;

		state.types = state.types.filter(
			( { value } ) => !types.includes( value ),
		);

		return state;
	},
};