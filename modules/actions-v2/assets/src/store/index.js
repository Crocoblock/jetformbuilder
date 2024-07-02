import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';
import { createReduxStore } from '@wordpress/data';

export const STORE_NAME = 'jet-forms/actions';

export default createReduxStore( STORE_NAME, {
	reducer,
	actions,
	selectors,
} );
