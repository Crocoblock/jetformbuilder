export function getCurrentBuilder( state ) {
	return getBuilder(
		state,
		state.settings?.builder || 'blocks',
	);
}

export function getBuilderIndex( state, name ) {
	return state.builders.findIndex( pattern => pattern.name === name );
}

export function getBuilders( state ) {
	return state.builders;
}

export function getBuilder( state, slug ) {
	const index = getBuilderIndex( state, slug );

	return state.builders[ index ];
}

export function getSetting( state, name ) {
	return state.settings[ name ];
}

export function getSettings( state ) {
	return state.settings;
}

export function getError( state ) {
	return state?.error ?? false;
}

export function isExecuting( state, actionSlug = 'default' ) {
	return state?.isExecuting?.[ actionSlug ] ?? false;
}