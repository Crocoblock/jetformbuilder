import * as view from './store/modules/stable-view'

const config = () => window.JetFBPageConfig;

Vuex.Store.prototype.registerMetaBoxes = function registerMetaBoxes() {
	for ( const container of config() ) {
		const boxes = [ ...container.boxes.filter( box => box.is_table_view ) ];

		for ( const box of boxes ) {
			this.registerMetaBox( box );
		}
	}
};

Vuex.Store.prototype.registerMetaBox = function registerMetaBox( box ) {
	this.registerModule( `scope-${box.id}`, {
		namespaced: true,
		state() {
			return {
				list: box.values,
			}
		},
	} )
}

Vuex.Store.prototype.registerTableModule = function registerTablePage( source = false, namespace = 'default' ) {
	if ( ! source ) {
		source = config();
	}

	this.registerModule( `scope-${namespace}`, {
		namespaced: true,
		modules: {
			view
		}
	} );

	const {
		list = [],
		columns = {},
		total,
		actions
	} = source;

	this.setColumns( JSON.parse( JSON.stringify( columns ) ) );
	this.setList( JSON.parse( JSON.stringify( list ) ) );
	this.setActionsList( actions );

	this.setQueryState( {
		total: + total,
		limit: this.currentList.length,
	} );

	this.setQueriedPage( 1 );
}