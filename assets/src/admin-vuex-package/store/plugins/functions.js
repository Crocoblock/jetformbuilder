import stableView from '../stable-view';
import singleView from '../single-view';

export const config = () => window.JetFBPageConfig;

export function registerNamespacedModule( store, namespace = 'default' ) {
	store.registerModule(
		`scope-${ namespace }`,
		(
			'default' === namespace || ! namespace
		) ? stableView : singleView,
	);
}

export function setTableSeed( store, source ) {
	const {
		list = [],
		columns = {},
		total,
		actions,
	} = source;

	store.commit( 'setColumns', columns );
	store.commit( 'setList', list );
	store.commit( 'setActionsList', actions );
	store.commit( 'setTotal', total );
	store.commit( 'setLimit', store.getters.list.length );

	store.dispatch( 'setQueriedPage', 1 );
}
