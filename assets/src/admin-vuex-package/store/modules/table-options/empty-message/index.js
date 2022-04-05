const { __ } = wp.i18n;

export default {
	state: {
		message: ''
	},
	getters: {
		emptyMessage: state => {
			return state.message;
		},
	},
	mutations: {
		setEmptyMessage( state, message ) {
			state.message = message ? message : __( 'No items found', 'jet-form-builder' );
		}
	},
};