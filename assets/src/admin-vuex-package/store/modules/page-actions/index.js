export default {
	namespaced: true,
	state: () => (
		{
			actions: [],
			current: '',
			loading: {},
			disabled: {},
		}
	),
	getters: {
		pageActions: state => {
			return state.actions;
		},
		isLoading: state => slug => {
			return state.loading[ slug ] ?? false;
		},
		isDisabled: state => slug => {
			return state.disabled[ slug ] ?? false;
		}
	},
	mutations: {
		setPageActions( state, actions ) {
			state.actions = actions;
		},
		setCurrentAction( state, actionSlug ) {
			state.current = actionSlug;
		},
		toggleDisabled( state ) {
			state.disabled = {
				...state.disabled,
				[ state.current ]: ! ( state.disabled[ state.current ] ?? false )
			};
		},
		toggleLoading( state ) {
			state.loading = {
				...state.loading,
				[ state.current ]: ! ( state.loading[ state.current ] ?? false )
			};
		}
	},
};
