import constants from './constants';

export default {
	register( items ) {
		return {
			type: constants.register,
			items,
		};
	},
	addRenderState( item ) {
		return {
			type: constants.addRenderState,
			item,
		};
	},
	addRenderStates( items ) {
		return {
			type: constants.addRenderStates,
			items,
		};
	},
	deleteRenderStates( items ) {
		return {
			type: constants.deleteRenderStates,
			items,
		}
	}

};