import constants from './constants';
import selectors from './selectors';

const defaultEmbed = {
	src: 'https://www.youtube.com/embed/LBO8E7W4AF0',
};

export default {
	[ constants.registerBuilders ]( state, action ) {
		if ( !Array.isArray( action.items ) ) {
			action.items = [ action.items ];
		}

		for ( let item of action.items ) {

			if ( !item.hasOwnProperty( 'name' ) ) {
				continue;
			}

			const issetIndex = selectors.getBuilderIndex( state, item.name );

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
	[ constants.unRegisterBuilders ]( state, action ) {
		const { names } = action;

		state.builders = state.builders.filter(
			( { name } ) => !names.includes( name ),
		);

		return state;
	},
	[ constants.updateSettings ]( state, action ) {
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