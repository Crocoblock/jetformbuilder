Vuex.Store.prototype.registerMetaBoxes = function registerMetaBoxes() {

	for ( const container of window.JetFBPageConfig.containers ) {
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