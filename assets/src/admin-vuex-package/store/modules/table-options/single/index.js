const { __ } = wp.i18n;

export default {
	state: {
		singleEndpoint: {},
	},
	getters: {
		hasSingleEndpoint: state => {
			return (
				0 < Object.keys( state.singleEndpoint ).length
			);
		},
		getSingleEndpoint: state => {
			return state.singleEndpoint;
		},
		getSingleHref: state => {
			return state.singleEndpoint?.href ?? '#';
		},
		getSingleType: state => {
			return state.singleEndpoint?.type ?? 'external';
		},
		getSingleTitle: state => {
			return state.singleEndpoint.title ?? __( 'View', 'jet-form-builder' );
		}
	},
	mutations: {
		setSingleEndpoint( state, single ) {
			state.singleEndpoint = single;
		},
	},
};