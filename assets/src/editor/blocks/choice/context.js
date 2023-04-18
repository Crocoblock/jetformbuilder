const { createContext } = wp.element;

const ChoiceItemContext = createContext( {
	clientId: false,
} );

export default ChoiceItemContext;