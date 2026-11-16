export const POST_CONTEXT_EXPIRED = 'post_context_expired';

const POST_ID_FIELD   = '__queried_post_id';
const REFRESH_TIMEOUT = 10000;
const SIGNATURE_FIELD = '__queried_post_signature';

/**
 * Service fields that a fresh render of the page signs for the visitor.
 */
const REFRESH_FIELDS = [
	POST_ID_FIELD,
	SIGNATURE_FIELD,
	'_wpnonce',
	'_jfb_csrf_token',
];

function fieldValue( formNode, name ) {
	const input = formNode.querySelector( `input[name="${ name }"]` );

	return input ? input.value : null;
}

function setHidden( formNode, name, value ) {
	let input = formNode.querySelector( `input[name="${ name }"]` );

	if ( !input ) {
		input      = document.createElement( 'input' );
		input.type = 'hidden';
		input.name = name;
		formNode.appendChild( input );
	}

	input.value = value;
}

/**
 * Applies a post context token printed by the [jet_fb_post_context]
 * shortcode: "<post ID>.<signature>". The server signed it for the post it
 * rendered (for example, a listing item), so a form shared by many items can
 * switch to the item the visitor picked.
 *
 * @param {HTMLFormElement} formNode
 * @param {string}          token
 * @return {boolean} Whether the token was applied.
 */
export function setPostContext( formNode, token ) {
	const match = /^(\d+)\.([a-f0-9]{64})$/.exec( String( token ?? '' ).trim() );

	if ( !formNode || !match ) {
		return false;
	}

	setHidden( formNode, POST_ID_FIELD, match[ 1 ] );
	setHidden( formNode, SIGNATURE_FIELD, match[ 2 ] );

	return true;
}

/**
 * The same form for the same post on a fresh render of the page. Never
 * another post: the context of the form must not change silently.
 *
 * @param {Document}        doc
 * @param {HTMLFormElement} formNode
 * @param {number}          formId
 * @return {HTMLFormElement|null}
 */
function findFreshForm( doc, formNode, formId ) {
	const postId = fieldValue( formNode, POST_ID_FIELD );
	const forms  = doc.querySelectorAll(
		`form.jet-form-builder[data-form-id="${ formId }"]`,
	);

	for ( const node of forms ) {
		if ( fieldValue( node, POST_ID_FIELD ) === postId ) {
			return node;
		}
	}

	return null;
}

/**
 * The page was cached before forms carried a signed post context. Load the
 * current page past the page cache and take the service fields of the same
 * form from it. The visitor keeps everything already entered.
 *
 * @param {HTMLFormElement} formNode
 * @param {number}          formId
 * @return {Promise<boolean>} Whether a fresh signature was applied.
 */
export function refreshPostContext( formNode, formId ) {
	if ( 'function' !== typeof window.fetch ||
		'function' !== typeof window.DOMParser
	) {
		return Promise.resolve( false );
	}

	const url = new URL( window.location.href );
	url.hash  = '';
	url.searchParams.set( 'jfb_ctx', String( Date.now() ) );

	// A hanging page must not keep the form locked.
	const controller = 'function' === typeof window.AbortController
		? new window.AbortController()
		: null;
	const timer      = controller
		? window.setTimeout( () => controller.abort(), REFRESH_TIMEOUT )
		: null;

	return window.fetch( url.toString(), {
		credentials: 'same-origin',
		cache: 'no-store',
		signal: controller ? controller.signal : undefined,
	} ).then(
		response => ( response.ok ? response.text() : '' ),
	).then( html => {
		if ( !html ) {
			return false;
		}

		const doc       = new window.DOMParser().parseFromString( html, 'text/html' );
		const fresh     = findFreshForm( doc, formNode, formId );
		const signature = fresh ? fieldValue( fresh, SIGNATURE_FIELD ) : null;

		if ( !signature ) {
			return false;
		}

		for ( const name of REFRESH_FIELDS ) {
			const value = fieldValue( fresh, name );

			if ( null !== value ) {
				setHidden( formNode, name, value );
			}
		}

		return true;
	} ).catch( () => false ).finally( () => {
		if ( timer ) {
			window.clearTimeout( timer );
		}
	} );
}
