import { createRoot } from '@wordpress/element';
import PreviewButton from './PreviewButton';

const buttonDiv = document.createElement( 'div' );
buttonDiv.classList.add( 'jfb-preview-wrapper' );

// Render our button.
createRoot( buttonDiv ).render( <PreviewButton/> );

const appendButton = function ( unsubscribeCallback ) {
	/**
	 * In 6.6 WordPress "edit-post-header__settings" css class
	 * was renamed "editor-header__settings"
	 */
	const header = document.querySelector(
		'.edit-post-header__settings, .editor-header__settings',
	);

	if ( !header ) {
		return null;
	}

	unsubscribeCallback();
	header.insertBefore(
		buttonDiv,
		header.querySelector( '.editor-post-publish-button__button' ),
	);
};

export default appendButton;