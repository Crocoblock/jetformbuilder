const { createContext } = wp.element;

const EditRulesModalContext = createContext( {
	showModal: false,
	setShowModal: () => {},
} );

export default EditRulesModalContext;