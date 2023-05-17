const { createContext } = wp.element;

const ChoicesFieldContext = createContext( {
	current: false,
	updateCurrent: () => {},
} );

export default ChoicesFieldContext;