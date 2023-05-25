import singleView from '../single-view';
import editTable from '../modules/edit-table';
import editList from '../modules/edit-list';
import actions from '../modules/page-actions';

export const config = () => window.JetFBPageConfig;

export function getBoxSlug( box ) {
	return 'string' === typeof box ? box : (
		box?.slug || 'default'
	);
}

export function getScopeName( box ) {
	return 'scope-' + getBoxSlug( box );
}

export function registerNamespacedModule( store, box ) {
	const { render_type } = box;
	let module            = ( modules = {} ) => (
		{
			...singleView,
			modules: {
				...singleView.modules,
				...modules,
			},
		}
	);

	switch ( render_type ) {
		case 'table':
			store.registerModule(
				getScopeName( box ),
				module( {
					edit: editTable,
				} ),
			);
			break;
		default:
			store.registerModule(
				getScopeName( box ),
				module( {
					edit: editList,
					actions,
				} ),
			);
			break;
	}
}

export function withScope( box ) {
	const pref = getScopeName( box );

	return method => {
		return `${ pref }/${ method }`;
	};
}

export function setTableSeed( store, source ) {
	const {
		      list                      = [],
		      columns                   = {},
		      total                     = 0,
		      receive_url               = {},
		      actions,
		      render_type               = '',
		      empty_message             = '',
		      is_editable_table         = false,
		      is_editable_table_control = false,
		      stable_limit              = null,
		      ...options
	      } = source;

	let getName = withScope( source );

	store.commit( getName( 'setEmptyMessage' ), empty_message );
	store.commit( getName( 'setRenderType' ), render_type );
	store.commit( getName( 'setActionsList' ), actions );
	store.commit( getName( 'setColumns' ), columns );
	store.commit( getName( 'setList' ), list );
	store.commit( getName( 'setTotal' ), total );
	store.commit( getName( 'setReceiveEndpoint' ), receive_url );
	store.commit( getName( 'setLimit' ), stable_limit ?? list?.length );
	store.commit( getName( 'toggleEditTable' ), is_editable_table );
	store.commit( getName( 'setEditableTable' ), is_editable_table_control );
	store.commit( getName( 'options/insert' ), options );

	store.dispatch( getName( 'setQueriedPage' ), 1 );

	store.subscribe( ( mutation, state ) => {
		const typeParts = mutation.type.split( '/' );

		switch ( typeParts.at( -1 ) ) {
			case 'setFilter':
				store.dispatch( getName( 'fetchPageWithFilters' ) );
				return;
		}
	} );
}

export function setListSeed( store, source ) {
	const {
		      list                      = {},
		      columns                   = {},
		      render_type               = '',
		      single_endpoint           = {},
		      receive_url               = {},
		      is_editable_table         = false,
		      is_editable_table_control = false,
		      box_actions               = [],
		      ...options
	      } = source;

	let getName = withScope( source );

	store.commit( getName( 'setColumns' ), columns );
	store.commit( getName( 'setList' ), list );
	store.commit( getName( 'setReceiveEndpoint' ), receive_url );
	store.commit( getName( 'setRenderType' ), render_type );
	store.commit( getName( 'setSingleEndpoint' ), single_endpoint );
	store.commit( getName( 'toggleEditTable' ), is_editable_table );
	store.commit( getName( 'setEditableTable' ), is_editable_table_control );
	store.commit( getName( 'actions/setActions' ), box_actions );
	store.commit( getName( 'options/insert' ), options );
}
