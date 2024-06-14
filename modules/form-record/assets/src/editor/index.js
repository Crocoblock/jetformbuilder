import saveRecord from './save.record';
import { dispatch } from '@wordpress/data';

dispatch( 'jet-forms/actions' ).registerAction( saveRecord );