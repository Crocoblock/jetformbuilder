import stableView from '../store/stable-view';
import singleView from '../store/single-view';

export const config = () => window.JetFBPageConfig;

export function registerNamespacedModule( store, namespace = 'default' ) {
	store.registerModule(
		`scope-${ namespace }`,
		(
			'default' === namespace || ! namespace
		) ? stableView : singleView,
	);
}
