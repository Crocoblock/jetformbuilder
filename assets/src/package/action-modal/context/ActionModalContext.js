const { createContext } = wp.element;

const ActionModalContext = createContext( {
	actionClick: null,
	onRequestClose: () => {
	},
} );

export default ActionModalContext;