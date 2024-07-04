import action from './action';
import { register } from '@wordpress/data';
import store from './store';
import { registerAction } from 'jet-form-builder-actions';

register( store );
registerAction( action );