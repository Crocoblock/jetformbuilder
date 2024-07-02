import { createContext } from '@wordpress/element';

const CurrentActionEditContext = createContext( {} );

// backward compatibility
window.JetFBComponents                          = window.JetFBComponents ?? {};
window.JetFBComponents.CurrentActionEditContext = CurrentActionEditContext;

export default CurrentActionEditContext;