const { addQueryArgs } = JetFBActions;
const { apiFetch } = wp;
const { __ } = wp.i18n;

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

export function getBaseState() {
	return {
	};
}

export function getGetters() {
	const getters = {
	};

	return {
		...getters,
	};
}

export function getMutations() {
	return {
		addMetaBox( state, options ) {
			state[ options.id ] = options;
		}
	};
}

export function getActions() {
	return {

	};
}

export function getBaseStore() {
	return {
		strict: true,
		state: {
			...getBaseState(),
		},
		getters: {
			...getGetters(),
		},
		mutations: {
			...getMutations(),
		},
		actions: {
			...getActions(),
		},
	};
}