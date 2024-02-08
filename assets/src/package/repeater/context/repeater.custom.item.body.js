const { createContext } = wp.element;

export default createContext( {
	isSupported: () => false,
	render: ({children}) => children,
} );