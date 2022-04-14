const findActionIndex = ( state, actionSlug ) => {
	const index = state.actions.findIndex( action => actionSlug === action.slug );

	if ( - 1 === index ) {
		throw new Error( 'Undefined ' + actionSlug );
	}

	return index;
};

const toggleDisabled = ( state, { slug, force } = {} ) => {
	slug = slug ?? state.current;

	state.disabled = {
		...state.disabled,
		[ slug ]: force ?? ! (
		          state.disabled[ slug ] ?? false
		),
	};
};

const toggleLoading = ( state, { slug, force } = {} ) => {
	slug = slug ?? state.current;

	state.loading = {
		...state.loading,
		[ slug ]: force ?? ! (
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

const { apiFetch } = wp;

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
		actions: state => {
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
				return action?.messages ? action.messages[ slug ] : 'null';
			};
		},
		byEvent: state => event => {
			return state.actions.filter( action => (
				action.subscriptions.includes( event )
			) );
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
		setActions( state, actions ) {
			state.actions = actions;

			actions.forEach( action => {
				if ( action?.button?.disabled ) {
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
				toggleDisabled( state, { slug, force: true } );
			} );
		},
	},
	actions: {
		defaultDelete( { getters, commit } ) {
			commit( 'toggleLoading' );
			commit( 'toggleDoingAction', null, { root: true } );

			apiFetch( getters.current.endpoint ).then( response => {
				jfbEventBus.$CXNotice.add( {
					message: response.message,
					type: 'success',
					duration: 4000,
				} );
				commit( 'toggleDisabled' );

				document.location.href = getters.current.payload.redirect;
			} ).catch( error => {
				jfbEventBus.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );
			} ).finally( () => {
				commit( 'toggleLoading' );
				commit( 'toggleDoingAction', null, { root: true } );
			} );
		}
	}
};
