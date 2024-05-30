import constants from './constants';

export default {
	registerBuilders( items ) {
		return {
			type: constants.registerBuilders,
			items,
		};
	},
	unRegisterBuilders( names ) {
		return {
			type: constants.unRegisterBuilders,
			names,
		};
	},
	updateSettings( settings ) {
		return {
			type: constants.updateSettings,
			settings,
		};
	},
};