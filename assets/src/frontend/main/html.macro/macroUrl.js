/**
 * URL checks for HTML macros (JFB_FIELD::) placed in href/src attributes.
 *
 * A field value can come from the visitor (typed text, query_var preset),
 * so it must not be able to turn a link into a script URL. The scheme the
 * form author wrote in the attribute itself is trusted and left as is.
 */

// Same defaults as wp_allowed_protocols(), used when the server list is absent.
const DEFAULT_PROTOCOLS = [
	'http', 'https', 'ftp', 'ftps', 'mailto', 'news', 'irc', 'irc6', 'ircs',
	'gopher', 'nntp', 'feed', 'telnet', 'mms', 'rtsp', 'sms', 'svn', 'tel',
	'fax', 'xmpp', 'webcal', 'urn',
];

export const URL_MACRO_ATTRS = [ 'href', 'src', 'action', 'formaction', 'poster' ];

/**
 * `replaceAttrs` can be extended with the `jet-form-builder/frontend-settings`
 * filter. These names are never filled from field values: the value is
 * assigned as a DOM property, so they would parse HTML (innerHTML, srcdoc)
 * or define code (event handlers).
 *
 * @param  attrName {string}
 * @return {boolean}
 */
export function isForbiddenMacroAttr( attrName ) {
	const name = String( attrName ?? '' ).toLowerCase();

	return (
		name.startsWith( 'on' ) ||
		[ 'innerhtml', 'outerhtml', 'srcdoc' ].includes( name )
	);
}

function getAllowedProtocols() {
	const list = window?.JetFormBuilderSettings?.allowedProtocols;

	return Array.isArray( list ) && list.length
		? list.map( ( item ) => String( item ).toLowerCase() )
		: DEFAULT_PROTOCOLS;
}

/**
 * @param  value {string}
 * @return {string} lowercase scheme, or '' for relative URLs
 */
export function getUrlScheme( value ) {
	// Browsers ignore whitespace and control chars inside the scheme.
	// eslint-disable-next-line no-control-regex
	const url   = String( value ?? '' ).replace( /[\u0000- \u007f-\u009f]/g, '' );
	const match = url.match( /^([a-z][a-z0-9+.-]*):/i );

	return match ? match[ 1 ].toLowerCase() : '';
}

/**
 * @param  result   {string} attribute value after macros were replaced
 * @param  template {string} attribute value with every macro replaced by ''
 * @return {boolean}
 */
export function isAllowedMacroUrl( result, template ) {
	const scheme = getUrlScheme( result );

	if ( ! scheme ) {
		return true;
	}

	// The author wrote this scheme into the attribute, values did not add it.
	if ( scheme === getUrlScheme( template ) ) {
		return true;
	}

	return getAllowedProtocols().includes( scheme );
}

/**
 * The attribute template with every macro replaced by '' - what the form
 * author wrote. Built from the static parts only: macro parts are functions
 * with side effects (`jet.fb.macro.field.value` callbacks, repeater
 * reQueryValue()), so they are not called here.
 *
 * @param  parts   {Array<string|Function>} CalculatedFormula parts
 * @param  formula {string}                 the attribute value as written
 * @return {string}
 */
export function getStaticTemplate( parts, formula ) {
	if ( ! Array.isArray( parts ) || ! parts.length ) {
		return String( formula ?? '' );
	}

	return parts
		.map( ( part ) => ( 'function' === typeof part ? '' : part ) )
		.join( '' );
}
