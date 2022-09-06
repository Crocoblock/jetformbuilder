import constants from './constants';
import selectors from './selectors';

export default {
	[ constants.register ]( state, action ) {
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
	[ constants.lockActions ]( state, action ) {
		for ( const { id, self: actionSelf } of window.jetFormActionTypes ) {
			const current = window[ actionSelf ] ?? false;

			if ( false === current ) {
				continue;
			}

			const {
				__unsupported_events: unSup,
				__supported_events: sup,
			} = current;

			const action = {
				unsupported: state.types.filter( ( { self } ) => unSup.includes( self ) ).map( ( { value } ) => value ),
				supported: state.types.filter( ( { self } ) => sup.includes( self ) ).map( ( { value } ) => value ),
			};

			if ( ! action.supported.length && ! action.unsupported.length ) {
				continue;
			}

			state.lockedActions[ id ] = action;
		}

		return state;
	},
};