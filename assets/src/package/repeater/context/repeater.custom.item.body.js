import { createContext } from '@wordpress/element';

export default createContext( {
	// eslint-disable-next-line no-unused-vars
	isSupported: item => false,
	render: ( { children } ) => children,
} );