const { createContext } = wp.element;

const SanitizerContext = createContext( {
	control: {},
	current: false,
	addNew: () => {},
	remove: () => {},
	edit: () => {},
	onClose: () => {},
} );

export default SanitizerContext;