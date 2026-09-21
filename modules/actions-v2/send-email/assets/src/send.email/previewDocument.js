import { __ } from '@wordpress/i18n';

// Keep email styles in their own document, with no active content or navigation.
function previewDocument( content ) {
	const preview = new DOMParser().parseFromString( content, 'text/html' );
	preview.querySelectorAll( 'script, iframe, frame, frameset, object, embed, base, meta[http-equiv]' ).
		forEach( element => element.remove() );
	preview.querySelectorAll( 'a, area' ).forEach( element => {
		if ( element.hasAttribute( 'href' ) ) {
			element.setAttribute( 'href', '#' );
			element.setAttribute( 'tabindex', '-1' );
			element.style.setProperty( 'pointer-events', 'none', 'important' );
		}
		element.removeAttribute( 'target' );
		element.removeAttribute( 'download' );
		element.removeAttribute( 'ping' );
	} );

	const assetsUrl = window.JetFormEditorData?.assetsUrl;
	if ( assetsUrl ) {
		preview.querySelectorAll( 'img[src]' ).forEach( image => {
			const source = image.getAttribute( 'src' );
			if ( ! /%[^%\s<>]+%/.test( source ) ) {
				return;
			}

			image.setAttribute( 'src', assetsUrl + 'img/image-placeholder.jpg' );
			image.removeAttribute( 'srcset' );
			image.removeAttribute( 'sizes' );
			image.setAttribute( 'title', `${ __( 'Dynamic image', 'jet-form-builder' ) }: ${ source }` );
			if ( 'PICTURE' === image.parentElement?.tagName ) {
				image.parentElement.querySelectorAll( 'source' ).forEach( element => element.remove() );
			}
		} );
	}

	const policy = preview.createElement( 'meta' );
	policy.httpEquiv = 'Content-Security-Policy';
	policy.content = "default-src 'none'; script-src 'none'; style-src 'unsafe-inline' https: http:; img-src https: http: data:; font-src https: http: data:; form-action 'none'; base-uri 'none'";
	preview.head.prepend( policy );
	const viewport = preview.createElement( 'meta' );
	viewport.name = 'viewport';
	viewport.content = 'width=device-width, initial-scale=1';
	preview.head.append( viewport );

	return '<!doctype html>' + preview.documentElement.outerHTML;
}

export default previewDocument;
