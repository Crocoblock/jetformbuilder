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
	if ( observable.parent ) {
		return;
	}
	const root   = observable.rootNode.ownerDocument;
	const header = root.querySelector(
		'header.page-header, header.entry-header',
	);

	if ( header ) {
		header.append( buttonDiv );

		return;
	}

	// "24" theme compatibility
	const title = root.querySelector( '.wp-block-post-title' );

	if ( title ) {
		const titleFlex = document.createElement( 'div' );
		titleFlex.classList.add( 'jfb-use-form-container' );

		title.parentElement.insertBefore( titleFlex, title );
		titleFlex.append( title );
		titleFlex.append( buttonDiv );

		return;
	}

	observable.rootNode.parentElement.insertBefore(
		buttonDiv,
		observable.rootNode,
	);
}

export default appendButton;