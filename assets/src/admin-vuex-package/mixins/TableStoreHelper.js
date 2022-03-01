const { apiFetch } = wp;
const { __ } = wp.i18n;


export function getBaseState() {
	return {


		// for choose column


	};
}


export function getGetters() {
	return {
	};
}

export function getMutations() {
	return {
		/*
		 for pagination
		 */

		/*
		 for choose column
		 */


	};
}

export function getActions() {
	return {
		/*
		 for choose column
		 */
		/*
		 for pagination
		 */


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