import reducer from './reducer';
import actions from './actions';
import selectors from './selectors';
import constants from './constants';

const { createReduxStore } = wp.data;

export default createReduxStore( constants.store, {
	reducer,
	actions,
	selectors,
} );
