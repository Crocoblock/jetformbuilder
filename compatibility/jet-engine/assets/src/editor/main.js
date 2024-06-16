import updateOptions from './update.options';
import { dispatch } from '@wordpress/data';

dispatch( 'jet-forms/actions' ).registerAction( updateOptions );