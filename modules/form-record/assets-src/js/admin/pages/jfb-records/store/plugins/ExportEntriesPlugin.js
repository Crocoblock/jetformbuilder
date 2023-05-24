import ExportEntriesModule from '../modules/ExportEntriesModule';

function ExportEntriesPlugin( store ) {
	store.registerModule( 'export', ExportEntriesModule );

	store.subscribe( ( mutation, state ) => {
		const typeParts = mutation.type.split( '/' );

		switch ( typeParts.at( -1 ) ) {
			case 'setFilter':
				store.dispatch( 'export/handleFilters' );
				return;
			case 'setForm':
				if ( 'export' !== typeParts[ 0 ] ) {
					return;
				}
				store.commit( 'export/updateSelectedFields', [] );
				store.dispatch( 'export/resolveFields' ).then( () => {
					store.dispatch( 'export/selectAllFields' );
				} );
				return;
		}
	} );
}

export default ExportEntriesPlugin;