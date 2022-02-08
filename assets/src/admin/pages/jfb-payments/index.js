import PaymentsPage from './PaymentsPage';

const { PaymentsPage: { options } } = window.JetFBComponents;
const { renderCurrentPage } = window.JetFBActions;

if ( 'store' in options ) {
	options.store = new Vuex.Store( options.store )
}

renderCurrentPage( PaymentsPage, options );
