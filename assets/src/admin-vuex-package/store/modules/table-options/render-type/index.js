export default {
	state: {
		renderType: ''
	},
	getters: {
		isTable: state => {
			return 'table' === state.renderType;
		},
		isList: state => {
			return 'list' === state.renderType;
		},
		isUnknownType: state => {
			return ! [ 'table', 'list' ].includes( state.renderType );
		}
	},
	mutations: {
		setRenderType( state, type ) {
			state.renderType = type;
		}
	},
};