import constants from './constants';

export default {
	clearGateway() {
		return {
			type: constants.clearGateway,
		};
	},
	clearScenario() {
		return {
			type: constants.clearScenario,
		};
	},
	setRequest( item ) {
		return {
			type: constants.setRequest,
			item,
		};
	},
	setGateway( item ) {
		return {
			type: constants.setGateway,
			item,
		};
	},
	setGatewayInner( item ) {
		return {
			type: constants.setGatewayInner,
			item,
		};
	},
	setGatewaySpecific( item ) {
		return {
			type: constants.setGatewaySpecific,
			item,
		};
	},
	setScenario( item ) {
		return {
			type: constants.setScenario,
			item,
		};
	},
	setCurrentScenario( item ) {
		return {
			type: constants.setCurrentScenario,
			item,
		};
	},
	registerEventType( item ) {
		return {
			type: constants.registerEventType,
			item,
		};
	},
	hardSetGateway( item, value = '' ) {
		return {
			type: constants.hardSetGateway,
			item,
			value,
		};
	},
	hardSetGatewaySpecific( item, value = '' ) {
		return {
			type: constants.hardSetGatewaySpecific,
			item,
			value,
		};
	},
}