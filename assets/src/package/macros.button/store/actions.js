import constants from './constants';

export default {
	registerMacro( items, isClient = true ) {
		return {
			type: constants.registerMacro,
			items,
			isClient,
		};
	},

};