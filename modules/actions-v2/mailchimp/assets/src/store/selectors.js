export function getLists( state ) {
	return state?.api?.lists ?? [];
}

export function getGroups( state ) {
	return state?.api?.groups ?? {};
}

export function getFields( state ) {
	return state?.api?.fields ?? {};
}

export function isFetchLoading( state ) {
	return state.fetch?.loading ?? false;
}

export function getFetchError( state ) {
	return state.fetch?.error ?? false;
}