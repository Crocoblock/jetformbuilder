const { createContext } = wp.element;

const ConditionalModalContext = createContext( {
	showModal: false,
	setShowModal: () => {},
} );

export default ConditionalModalContext;