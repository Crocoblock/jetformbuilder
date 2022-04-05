import singleView from '../single-view';

export const config = () => window.JetFBPageConfig;

export function getBoxSlug( box ) {
	return 'string' === typeof box ? box : (
		box?.slug || 'default'
	);
}

export function getScopeName( box ) {
	return 'scope-' + getBoxSlug( box );
}

const getModule = () => singleView;

export function registerNamespacedModule( store, box ) {
	store.registerModule( getScopeName( box ), getModule() );
}

export function withScope( box ) {
	const pref = getScopeName( box );

	return method => {
		return `${ pref }/${ method }`;
	};
}

export function setTableSeed( store, source ) {
	const {
		list = [],
		columns = {},
		total = 0,
		receive_url = {},
		actions,
		is_editable_table = false,
		render_type = '',
		show_overflow = false,
		show_overflow_control = false,
		empty_message = ''
	} = source;

	let getName = withScope( source );

	store.commit( getName( 'setEmptyMessage' ), empty_message );
	store.commit( getName( 'setRenderType' ), render_type );
	store.commit( getName( 'setActionsList' ), actions );
	store.commit( getName( 'setColumns' ), columns );
	store.commit( getName( 'setList' ), list );
	store.commit( getName( 'setTotal' ), total );
	store.commit( getName( 'setReceiveEndpoint' ), receive_url );
	store.commit( getName( 'setLimit' ), list?.length );
	store.commit( getName( 'setEditableTable' ), is_editable_table );
	store.commit( getName( 'showOverflow' ), show_overflow );
	store.commit( getName( 'showOverflowControl' ), show_overflow_control );

	store.dispatch( getName( 'setQueriedPage' ), 1 );
}

export function setListSeed( store, source ) {
	const {
		list = {},
		columns = {},
		render_type = '',
		single_endpoint = {},
	} = source;

	let getName = withScope( source );

	store.commit( getName( 'setColumns' ), columns );
	store.commit( getName( 'setList' ), list );
	store.commit( getName( 'setRenderType' ), render_type );
	store.commit( getName( 'setSingleEndpoint' ), single_endpoint );
}
