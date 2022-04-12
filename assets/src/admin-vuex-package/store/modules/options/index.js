export default {
	namespaced: true,
	state: () => (
		{
			options: {},
		}
	),
	getters: {
		all: state => {
			return state.options;
		},
		footerHeading: state => {
			return state.options?.footer_heading ?? true;
		},
		isShowOverflow: state => {
			return state.options?.show_overflow ?? false;
		},
		showOverflowControl: state => {
			return state.options.show_overflow_control ?? false;
		},
	},
	mutations: {
		insert( state, options ) {
			state.options = options;
		},
		toggleShowOverflow( state ) {
			state.options.show_overflow = ! state.options.show_overflow;
		},
	}
};