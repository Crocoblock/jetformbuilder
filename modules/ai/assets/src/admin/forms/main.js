import AiFormButton from './AiFormButton';
import { createRoot } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';

const mountGenerateFormAIButton = () => {
	// Render our button.
	const buttonDiv         = document.createElement( 'div' );
	buttonDiv.style.display = 'inline-flex';

	const title = document.querySelector(
		'.page-title-action[href*="post-new.php"]',
	);

	title.after( buttonDiv );

	createRoot( buttonDiv ).render( <AiFormButton/> );
};

domReady( mountGenerateFormAIButton );