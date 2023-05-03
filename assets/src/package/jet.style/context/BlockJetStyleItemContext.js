const { createContext } = wp.element;

const BlockJetStyleItemContext = createContext( {
	panelId: null,
	resetAllFilter: null,
	onDeselect: null,
	hasValue: null,
	cssValue: null,
	updateCss: null,
	path: null,
} );

export default BlockJetStyleItemContext;