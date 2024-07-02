import action from './action';
import { dispatch, register } from '@wordpress/data';
import store from './store';

register( store );

dispatch( 'jet-forms/actions' ).registerAction( action );