import constants from './constants';

const dispatchers = {
	[ constants.register ]( state, action ) {
		const { slug, settings } = action.items;

		state.buttons[ slug ] = settings;

		return state;
	},
};

export default {
	...dispatchers,
};