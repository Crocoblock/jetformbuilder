import UseFormButton from './UseFormButton';
import { createRoot } from '@wordpress/element';

const buttonDiv = document.createElement( 'div' );
buttonDiv.classList.add( 'jfb-use-form-wrapper' );

// Render our button.
createRoot( buttonDiv ).render( <UseFormButton/> );

/**
 * @param observable {Observable}
 */
function appendButton( observable ) {
	const root   = observable.rootNode.ownerDocument;
	const header = root.querySelector(
		'header.page-header, header.entry-header',
	);

	if ( header ) {
		header.append( buttonDiv );

		return;
	}

	observable.rootNode.parentElement.insertBefore(
		buttonDiv,
		observable.rootNode,
	);
}

export default appendButton;