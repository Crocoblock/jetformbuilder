import { createReduxStore } from '@wordpress/data';
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

export const STORE_NAME = 'jet-forms/mailchimp';

const store = createReduxStore(
	STORE_NAME,
	{
		reducer,
		actions,
		selectors,
	}
);

export default store;
