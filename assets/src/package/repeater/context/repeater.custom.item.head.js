const { createContext } = wp.element;

const RepeaterHeadContext = createContext( {
	isSupported: item => false,
	render: ({currentItem, index}) => null,
} );

export default RepeaterHeadContext;