const { createContext } = wp.element;

const CurrentPropertyMapContext = createContext( {
	FieldSelect: null,
	property: ''
} );

export default CurrentPropertyMapContext;