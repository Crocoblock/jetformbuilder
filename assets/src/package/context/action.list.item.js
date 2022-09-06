const { createContext } = wp.element;

const ActionListItemContext = createContext( {
	index: - 1,
	action: {},
} );

export default ActionListItemContext;