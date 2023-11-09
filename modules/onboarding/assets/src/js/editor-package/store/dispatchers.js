import constants from './constants';
import selectors from './selectors';

export default {
	[ constants.register ]( state, action ) {
		if ( !Array.isArray( action.items ) ) {
			action.items = [ action.items ];
		}

		for ( let item of action.items ) {

			if ( !item.hasOwnProperty( 'name' ) ) {
				continue;
			}

			const issetIndex = selectors.getTypeIndex( state, item.name );

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
			( { name } ) => !types.includes( name ),
		);

		return state;
	},
};