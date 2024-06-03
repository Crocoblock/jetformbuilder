import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import { store } from './constants';
import { createReduxStore } from '@wordpress/data';

export default createReduxStore( store, {
	reducer,
	actions,
	selectors,
} );
