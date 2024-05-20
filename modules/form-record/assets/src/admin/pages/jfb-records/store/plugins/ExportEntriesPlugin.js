import ExportEntriesModule from '../modules/ExportEntriesModule';

function ExportEntriesPlugin( store ) {
	store.registerModule( 'export', ExportEntriesModule );

	store.subscribe( ( mutation, state ) => {
		const typeParts = mutation.type.split( '/' );

		switch ( typeParts.at( -1 ) ) {
			case 'setFilter':
			case 'clearSelectedFilters':
				store.dispatch( 'export/handleFilters' );
				return;
		}

		if ( 'export' !== typeParts[ 0 ] ) {
			return;
		}

		switch ( typeParts.at( -1 ) ) {
			case 'setStatus':
			case 'setDateFrom':
			case 'setDateTo':
				store.dispatch( 'export/resolveCount' ).then( () => {} );
				break;
			case 'setForm':
				store.dispatch( 'export/resolveCount' ).then( () => {} );

				store.commit( 'export/updateSelectedFields', [] );
				store.dispatch( 'export/resolveFields' ).then( () => {
					store.dispatch( 'export/selectAllFields' );
				} );
				break;
		}
	} );
}

export default ExportEntriesPlugin;