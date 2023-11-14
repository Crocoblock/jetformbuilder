import constants from './constants';
import selectors from './selectors';
import SinglePattern from '../components/SinglePattern';

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

			// is new pattern type
			if ( -1 === issetIndex ) {
				if ( !item.hasOwnProperty( 'view' ) ) {
					item.view = SinglePattern;
				}

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