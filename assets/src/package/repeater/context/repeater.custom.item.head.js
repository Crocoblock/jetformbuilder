const { createContext } = wp.element;

const RepeaterHeadContext = createContext( {
	isSupported: () => false,
	render: () => null,
} );

export default RepeaterHeadContext;