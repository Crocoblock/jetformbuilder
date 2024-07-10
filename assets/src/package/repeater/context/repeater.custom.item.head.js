/* eslint-disable no-unused-vars */
import { createContext } from '@wordpress/element';

const RepeaterHeadContext = createContext( {
	isSupported: item => false,
	render: ( { currentItem, index } ) => null,
} );

export default RepeaterHeadContext;