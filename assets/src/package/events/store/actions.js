import constants from './constants';

export default {
	register( items ) {
		return {
			type: constants.register,
			items,
		};
	},
	lockActions() {
		return {
			type: constants.lockActions,
		};
	},
	unRegister( types ) {
		return {
			type: constants.unRegister,
			types,
		};
	},
	clearDynamicEvents() {
		return {
			type: constants.clearDynamicEvents,
		};
	},
};