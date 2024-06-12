import {
	REGISTER_BUILDERS,
	UNREGISTER_BUILDERS,
	UPDATE_SETTINGS,
} from './constants';
import { getBuilderIndex } from './selectors';

const defaultEmbed = {
	src: 'https://www.youtube.com/embed/LBO8E7W4AF0',
};

export default {
	[ REGISTER_BUILDERS ]( state, action ) {
		if ( !Array.isArray( action.items ) ) {
			action.items = [ action.items ];
		}

		for ( let item of action.items ) {

			if ( !item.hasOwnProperty( 'name' ) ) {
				continue;
			}

			const issetIndex = getBuilderIndex( state, item.name );

			// is new pattern type
			if ( -1 === issetIndex ) {
				item.embed ??= { ...defaultEmbed };

				state.builders.push( { ...item } );
			}
			else {
				state.builders[ issetIndex ] = {
					...state.builders[ issetIndex ],
					...item,
				};
			}
		}

		return state;
	},
	[ UNREGISTER_BUILDERS ]( state, action ) {
		const { names } = action;

		state.builders = state.builders.filter(
			( { name } ) => !names.includes( name ),
		);

		return state;
	},
	[ UPDATE_SETTINGS ]( state, action ) {
		const { settings } = action;

		return {
			...state,
			settings: {
				...state.settings,
				...settings,
			},
		};
	},
};