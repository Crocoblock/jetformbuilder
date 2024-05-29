import { subscribe } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import appendButton from './appendButton';

domReady( () => {
	const unsubscribe = subscribe( () => appendButton( unsubscribe ) );
} );