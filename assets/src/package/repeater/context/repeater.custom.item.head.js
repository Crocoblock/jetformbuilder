const { createContext } = wp.element;

export default createContext( {
	isSupported: item => false,
	render: ({currentItem, index}) => null,
} );