import constants from './constants';

export default {
	register( items ) {
		return {
			type: constants.register,
			items,
		};
	},
	unRegister( types ) {
		return {
			type: constants.unRegister,
			types,
		};
	},
};