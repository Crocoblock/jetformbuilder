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

// Only plain presentational properties survive; everything else (position,
// content, behavior, @-rules...) is dropped. Values cannot contain url() or any
// other function (see SAFE_STYLE_VALUE), so even `background` cannot load a resource.
const ALLOWED_STYLE_PROPS = new Set( [
	'color', 'background-color', 'font-weight', 'font-style', 'font-size',
	'font-family', 'text-align', 'text-decoration', 'text-indent',
	'text-transform', 'line-height', 'letter-spacing', 'vertical-align',
	'list-style-type', 'white-space', 'width', 'height', 'max-width',
	'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
	'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
	'display', 'float', 'opacity', 'box-sizing', 'object-fit', 'word-break',
	'overflow-wrap', 'list-style', 'min-width', 'min-height', 'max-height',
	'background', 'border', 'border-top', 'border-right', 'border-bottom',
	'border-left', 'border-color', 'border-style', 'border-width',
	'border-radius',
] );

// Plain tokens only: no backslash escapes (they can spell `url(`), no comments,
// no quotes, and no function other than the colour ones.
const SAFE_STYLE_VALUE = /^[a-z0-9#%.,\s+-]*(?:(?:rgb|rgba|hsl|hsla)\([0-9.,%\s/+-]*\)[a-z0-9#%.,\s+-]*)*$/i;

/**
 * Rebuilds the style attribute from validated declarations instead of
 * pattern-matching a string the browser will interpret differently.
 */
function cleanStyle( value ) {
	return String( value )
		.split( ';' )
		.map( ( declaration ) => {
			const index = declaration.indexOf( ':' );

			if ( index < 1 ) {
				return '';
			}

			const prop = declaration.slice( 0, index ).trim().toLowerCase();
			const val  = declaration.slice( index + 1 ).trim();

			return (
				ALLOWED_STYLE_PROPS.has( prop ) &&
				val &&
				SAFE_STYLE_VALUE.test( val )
			) ? `${ prop }: ${ val }` : '';
		} )
		.filter( Boolean )
		.join( '; ' );
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
				( URL_ATTRS.has( name ) && ! isSafeUrl( attr.value ) )
			) {
				child.removeAttribute( attr.name );

				return;
			}

			if ( 'style' === name ) {
				const style = cleanStyle( attr.value );

				if ( style ) {
					child.setAttribute( 'style', style );
				} else {
					child.removeAttribute( 'style' );
				}
			}
		} );

		// browsing-context names are case-insensitive and any named target keeps
		// window.opener, so every target gets noopener (replacing a supplied rel)
		if ( child.hasAttribute( 'target' ) ) {
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
