const { createContext } = wp.element;

export default createContext( {
	currentItem: {},
	changeCurrentItem: () => {},
	currentIndex: -1,
} );