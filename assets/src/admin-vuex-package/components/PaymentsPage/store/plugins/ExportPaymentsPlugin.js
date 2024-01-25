import ExportPaymentsModule from '../modules/ExportPaymentsModule';

function ExportPaymentsPlugin( store ) {
	store.registerModule( 'exportPayments', ExportPaymentsModule );

	store.subscribe( ( mutation ) => {
		const typeParts = mutation.type.split( '/' );

		switch ( typeParts.at( -1 ) ) {
			case 'setFilter':
			case 'clearSelectedFilters':
				store.dispatch( 'exportPayments/handleFilters' );
				return;
		}

		maybeResolveCount( typeParts, store );
	} );
}

function maybeResolveCount( typeParts, store ) {
	if ( 'exportPayments' !== typeParts[ 0 ] ) {
		return;
	}

	switch ( typeParts.at( -1 ) ) {
		case 'setStatus':
			store.dispatch( 'exportPayments/resolveCount' ).then( () => {} );
			break;
	}
}

export default ExportPaymentsPlugin;