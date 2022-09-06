const { createContext } = wp.element;

const RepeaterItemContext = createContext( {
	currentItem: {},
	changeCurrentItem: () => {},
	currentIndex: -1,
} );

export default RepeaterItemContext;