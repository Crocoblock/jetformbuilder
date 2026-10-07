/**
 * Allowlist HTML sanitizer for values substituted into `innerHTML` by
 * HTML macros. Unlike plain escaping it keeps harmless markup (WYSIWYG
 * field content, <br>, <b>, links, ...) rendered as before, but drops
 * scripts, event handlers and script URLs.
 *
 * Parsing goes through DOMParser, so nothing is executed or loaded while
 * the value is inspected.
 */
const ALLOWED_TAGS = new Set( [
	'a', 'abbr', 'b', 'blockquote', 'br', 'caption', 'code', 'col', 'colgroup',
	'dd', 'del', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure', 'h1', 'h2',
	'h3', 'h4', 'h5', 'h6', 'hr', 'i', 'img', 'ins', 'li', 'mark', 'ol', 'p',
	'pre', 'q', 's', 'small', 'span', 'strike', 'strong', 'sub', 'sup', 'table',
	'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u', 'ul',
] );

// Removed together with their content (never unwrapped).
const DROP_WITH_CONTENT = new Set( [
	'script', 'style', 'iframe', 'frame', 'frameset', 'object', 'embed',
	'applet', 'template', 'noscript', 'svg', 'math', 'form', 'input', 'button',
	'textarea', 'select', 'option', 'link', 'meta', 'base', 'title', 'head',
	'audio', 'video', 'source', 'track', 'canvas', 'dialog', 'xmp', 'plaintext',
] );

const ALLOWED_ATTRS = new Set( [
	'href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel', 'width',
	'height', 'colspan', 'rowspan', 'align', 'dir', 'lang',
] );

const URL_ATTRS = new Set( [ 'href', 'src' ] );

function isSafeUrl( value ) {
	// browsers ignore tabs/newlines/control chars inside the scheme
	// eslint-disable-next-line no-control-regex
	const url = String( value ).replace( /[\u0000- \u007f-\u009f]/g, '' );
	const match = url.match( /^([a-z][a-z0-9+.-]*):/i );

	if ( ! match ) {
		return true; // relative url
	}

	return [ 'http', 'https', 'mailto', 'tel' ].includes(
		match[ 1 ].toLowerCase(),
	);
}

function isSafeStyle( value ) {
	return ! /expression\s*\(|url\s*\(|javascript:|@import|behavio?r\s*:|-moz-binding/i
		.test( String( value ).replace( /\\/g, '' ) );
}

function cleanNode( node ) {
	Array.from( node.childNodes ).forEach( ( child ) => {
		if ( 1 !== child.nodeType ) {
			// keep text, drop comments/processing instructions/etc.
			if ( 3 !== child.nodeType ) {
				node.removeChild( child );
			}

			return;
		}

		const tag = child.localName;

		if ( DROP_WITH_CONTENT.has( tag ) ) {
			node.removeChild( child );

			return;
		}

		cleanNode( child );

		if ( ! ALLOWED_TAGS.has( tag ) ) {
			// unknown element: keep its (already cleaned) content only
			while ( child.firstChild ) {
				node.insertBefore( child.firstChild, child );
			}
			node.removeChild( child );

			return;
		}

		Array.from( child.attributes ).forEach( ( attr ) => {
			const name = attr.name.toLowerCase();

			if (
				! ALLOWED_ATTRS.has( name ) ||
				( URL_ATTRS.has( name ) && ! isSafeUrl( attr.value ) ) ||
				( 'style' === name && ! isSafeStyle( attr.value ) )
			) {
				child.removeAttribute( attr.name );
			}
		} );

		if ( '_blank' === child.getAttribute( 'target' ) ) {
			child.setAttribute( 'rel', 'noopener noreferrer' );
		}
	} );
}

function sanitizeHtml( value ) {
	const html = String( value ?? '' );

	// fast path: no markup and no entities, nothing to sanitize
	if ( ! /[<&]/.test( html ) ) {
		return html;
	}

	const doc = new DOMParser().parseFromString(
		`<!doctype html><body>${ html }`,
		'text/html',
	);

	cleanNode( doc.body );

	return doc.body.innerHTML;
}

export default sanitizeHtml;
