import { createRoot } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import HtmlParserButton from './HtmlParserButton';

domReady( () => {
	const target = document.querySelector( '.page-title-action[href*="post-new.php"]' );

	if ( ! target ) {
		return;
	}

	const container = document.createElement( 'div' );
	container.style.display = 'inline-flex';
	container.style.marginLeft = '4px';

	target.after( container );
	createRoot( container ).render(
		wp.element.createElement( HtmlParserButton )
	);
} );