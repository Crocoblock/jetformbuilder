import action from './action';
import store from './store';
import { dispatch, register } from '@wordpress/data';

register( store );

dispatch( 'jet-forms/actions' ).registerAction( action );
