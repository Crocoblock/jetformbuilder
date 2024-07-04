import action from './action';
import store from './store';
import { register } from '@wordpress/data';
import { registerAction } from 'jet-form-builder-actions';

register( store );
registerAction( action );
