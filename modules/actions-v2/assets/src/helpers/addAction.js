import { dispatch } from '@wordpress/data';
import { STORE_NAME } from '../store';

function addAction( actionType, actionInstance ) {
	dispatch( STORE_NAME ).addCallback( actionType, actionInstance );
}

// backward compatibility
window.JetFBActions           = window.JetFBActions ?? {};
window.JetFBActions.addAction = addAction;

export default addAction;