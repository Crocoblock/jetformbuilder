const { createContext } = wp.element;

export default createContext( {
	actionClick: null,
	onRequestClose: () => {
	},
} );