const { createContext } = wp.element;

const RepeaterButtonsContext = createContext( {
	edit: item => true,
	move: item => true,
	clone: item => true,
	delete: item => true,
} );

export default RepeaterButtonsContext;