const { createContext } = wp.element;

const RepeaterButtonsContext = createContext( {
	edit: () => true,
	move: () => true,
	clone: () => true,
	delete: () => true,
} );

export default RepeaterButtonsContext;