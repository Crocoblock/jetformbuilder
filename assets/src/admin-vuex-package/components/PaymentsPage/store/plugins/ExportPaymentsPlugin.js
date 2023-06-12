import ExportPaymentsModule from '../modules/ExportPaymentsModule';

function ExportPaymentsPlugin( store ) {
	store.registerModule( 'exportPayments', ExportPaymentsModule );

	store.subscribe( ( mutation, state ) => {
		const typeParts = mutation.type.split( '/' );

		switch ( typeParts.at( -1 ) ) {
			case 'setFilter':
			case 'clearSelectedFilters':
				store.dispatch( 'exportPayments/handleFilters' );
				return;
		}
	} );
}

export default ExportPaymentsPlugin;