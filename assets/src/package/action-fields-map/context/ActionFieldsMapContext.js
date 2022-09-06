const { createContext } = wp.element;

const ActionFieldsMapContext = createContext( {
	name: '',
	data: {},
	index: 0,
} );

export default ActionFieldsMapContext;
