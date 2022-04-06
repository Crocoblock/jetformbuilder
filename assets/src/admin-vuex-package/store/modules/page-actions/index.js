const findActionIndex = ( state, actionSlug ) => {
	const index = state.actions.findIndex( action => state.current === action.slug );

	if ( - 1 === index ) {
		throw new Error( 'Undefined ' + actionSlug );
	}

	return index;
};

const toggleDisabled = ( state, slug ) => {
	if ( 'undefined' === typeof slug ) {
		slug = state.current;
	}
	state.disabled = {
		...state.disabled,
		[ slug ]: ! (
			state.disabled[ slug ] ?? false
		),
	};
};

const toggleLoading = ( state, slug ) => {
	if ( 'undefined' === typeof slug ) {
		slug = state.current;
	}
	state.loading = {
		...state.loading,
		[ slug ]: ! (
			state.loading[ slug ] ?? false
		),
	};
};

const current = state => {
	try {
		const index = findActionIndex( state, state.current );

		return state.actions[ index ];
	} catch ( error ) {
		return {};
	}
};

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
		},
		current,
		label: state => {
			const action = current( state );
			return slug => {
				return action?.messages ? action.messages[ slug ] : '';
			};
		},
	},
	mutations: {
		replaceCurrent( state, action ) {
			try {
				const index = findActionIndex( state, state.current );

				state.actions[ index ] = { ...action };
			} catch ( error ) {
				// do nothing
			}
		},
		setPageActions( state, actions ) {
			state.actions = actions;

			actions.forEach( action => {
				if ( action.button.disabled ) {
					state.disabled[ action.slug ] = true;
				}
			} );
		},
		setCurrentAction( state, actionSlug ) {
			state.current = actionSlug;
		},
		toggleDisabled,
		toggleLoading,
		disabledAll( state ) {
			state.actions.forEach( ( { slug } ) => {
				toggleDisabled( state, slug );
			} );
		},
	},
};
