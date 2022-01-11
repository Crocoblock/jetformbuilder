import Payments from './Payments';

const { PaymentsPage: { options } } = window.JetFBComponents;
const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( Payments, options );
