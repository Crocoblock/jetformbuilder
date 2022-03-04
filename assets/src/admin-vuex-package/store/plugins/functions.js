import stableView from '../stable-view';
import singleView from '../single-view';

export const config = () => window.JetFBPageConfig;

export function getBoxSlug( box ) {
	return 'string' === typeof box ? box : (
		box?.slug || 'default'
	);
}

export function withScope( box ) {
	const pref = getScopeName( box );

	return method => {
		return `${ pref }/${ method }`;
	};
}

export function getScopeName( box ) {
	return 'scope-' + getBoxSlug( box );
}

export function registerNamespacedModule( store, box ) {
	const slug = getBoxSlug( box );
	const module = 'default' === slug ? stableView : singleView;

	store.registerModule( getScopeName( box ), module );
}

export function setTableSeed( store, source ) {
	const {
		list = [],
		columns = {},
		total = 0,
		actions,
	} = source;

	const getName = withScope( source );

	store.commit( 'setActionsList', actions );
	store.commit( getName( 'setColumns' ), columns );
	store.commit( getName( 'setList' ), list );
	store.commit( getName( 'setTotal' ), total );
	store.commit( getName( 'setLimit' ), list?.length );

	store.dispatch( getName( 'setQueriedPage' ), 1 );
}
