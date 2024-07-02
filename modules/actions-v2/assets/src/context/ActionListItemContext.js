import { createContext } from '@wordpress/element';

const ActionListItemContext = createContext( {
	index: -1,
	action: {},
} );

// backward compatibility
window.JetFBComponents                       = window.JetFBComponents ?? {};
window.JetFBComponents.ActionListItemContext = ActionListItemContext;

export default ActionListItemContext;