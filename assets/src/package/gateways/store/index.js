import reducer from './reducer';
import actions from './actions';
import selectors from './selectors';

const { createReduxStore } = wp.data;

export default createReduxStore( 'jet-forms/gateways', {
	reducer,
	actions,
	selectors,
} );


