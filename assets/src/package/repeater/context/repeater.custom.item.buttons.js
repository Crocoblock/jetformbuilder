/* eslint-disable no-unused-vars */
import { createContext } from '@wordpress/element';

const RepeaterButtonsContext = createContext( {
	edit: item => true,
	move: item => true,
	clone: item => true,
	delete: item => true,
} );

export default RepeaterButtonsContext;