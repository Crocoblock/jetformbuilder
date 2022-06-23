import constants from './constants';

export default {
	register( slug, settings ) {
		return {
			type: constants.register,
			slug,
			settings,
		};
	},
};