import constants from './constants';

export default {
	register( items ) {
		return {
			type: constants.register,
			items,
		};
	},
};