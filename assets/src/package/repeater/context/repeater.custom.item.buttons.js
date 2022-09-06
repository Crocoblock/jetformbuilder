const { createContext } = wp.element;

export default createContext( {
	edit: item => true,
	move: item => true,
	clone: item => true,
	delete: item => true,
} );