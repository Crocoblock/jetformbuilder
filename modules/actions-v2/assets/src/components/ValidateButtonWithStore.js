import FetchAjaxButton from './FetchAjaxButton';
import { STORE_NAME } from '../store';
import { useSelect } from '@wordpress/data';

function ValidateButtonWithStore( props ) {

	const currentAction = useSelect( ( select ) => {
		return select( STORE_NAME ).getCurrentAction();
	}, [] );

	return <FetchAjaxButton
		id={ currentAction.id }
		{ ...props }
	/>;
}

// backward compatibility
window.JetFBComponents                         = window?.JetFBComponents ?? {};
window.JetFBComponents.ValidateButtonWithStore = ValidateButtonWithStore;

export default ValidateButtonWithStore;