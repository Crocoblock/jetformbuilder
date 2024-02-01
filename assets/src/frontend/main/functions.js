import BaseHtmlAttr from './attrs/BaseHtmlAttr';
import MaxFilesHtmlAttr from './attrs/MaxFilesHtmlAttr';
import MaxFileSizeHtmlAttr from './attrs/MaxFileSizeHtmlAttr';
import RemainingCalcAttr from './attrs/RemainingCalcAttr';
import FileExtensionHtmlAttr from './attrs/FileExtensionHtmlAttr';
import environment from './environment';

const { applyFilters } = JetPlugins.hooks;

/**
 * @param  callbacks {Function[]}
 * @return {Promise<*>}
 */
async function allRejected( callbacks ) {
	const results = await Promise.allSettled(
		callbacks.map( current => new Promise( current ) ),
	);

	/* eslint-disable no-console */
	if ( window?.JetFormBuilderSettings?.devmode ) {
		console.group( 'allRejected' );
		console.info( ...results );
		console.groupEnd();
	}
	/* eslint-enable no-console */

	const invalid = results.filter(
		( error ) => 'rejected' === error.status,
	);

	return invalid.map( ( { reason, value } ) => {
		return reason?.length ? reason[ 0 ] : (
			reason ?? value
		);
	} );
}

function getLanguage() {
	const lang = window?.navigator?.languages?.length
	             ? window.navigator.languages[ 0 ]
	             : window?.navigator?.language;

	return lang ?? 'en-US';
}

const getInputHtmlAttr = () => applyFilters(
	'jet.fb.input.html.attrs',
	[
		'min',
		'max',
		'minLength',
		'maxLength',
		MaxFilesHtmlAttr,
		MaxFileSizeHtmlAttr,
		RemainingCalcAttr,
		FileExtensionHtmlAttr,
	],
);

/**
 * @type {BaseHtmlAttr[]}
 */
let inputHtmlAttrs = [];

/**
 * @param name {String}
 */
function getDefaultAttrByName( name ) {
	const attr    = new BaseHtmlAttr();
	attr.attrName = name;

	return attr;
}

/**
 * @param input {InputData}
 */
// eslint-disable-next-line complexity
function setAttrs( input ) {
	if ( !inputHtmlAttrs.length ) {
		inputHtmlAttrs = getInputHtmlAttr();
	}

	for ( const inputHtmlAttr of inputHtmlAttrs ) {
		let current;
		if ( 'string' === typeof inputHtmlAttr ) {
			current = getDefaultAttrByName( inputHtmlAttr );
		}
		else {
			current = new inputHtmlAttr();
		}

		if ( !current.isSupported( input ) ) {
			continue;
		}
		input.attrs[ current.attrName ] = current;

		current.setInput( input );
		current.observe();
	}
}

function toHTML( text ) {
	const template     = document.createElement( 'template' );
	template.innerHTML = text.trim();

	return template.content;
}

// eslint-disable-next-line complexity
function isEmpty( value ) {
	if ( 'boolean' === typeof value ) {
		return !value;
	}

	if ( null === value || undefined === value ) {
		return true;
	}

	if ( 'object' === typeof value && !Array.isArray( value ) ) {
		return !Object.keys( value )?.length;
	}

	if ( 'number' === typeof value ) {
		return 0 === value;
	}

	return !value?.length;
}

/**
 * @param node {HTMLElement}
 */
function isVisible( node ) {
	return (
		node?.isConnected && null !== node?.offsetParent
	);
}

/**
 * @param node {Element}
 */
function getOffsetTop( node ) {
	const rect = node.getBoundingClientRect();

	const maybeWindow = getScrollParent( node );

	return rect?.top + (
		maybeWindow?.scrollY ?? 0
	);
}

const getNode = current => (
	current.scrollHeight > current.clientHeight ? current : false
);

function getScrollParent( node ) {

	// jet-popup compatibility
	let container = node.closest( '.jet-popup__container-inner' );

	if ( container ) {
		return getNode( container );
	}

	// elementor-pro popup compatibility
	container = node.closest( '.elementor-popup-modal .dialog-message' );

	if ( container ) {
		return getNode( container );
	}

	return window;
}

/**
 * @param inputs {InputData[]}
 */
function focusOnInvalidInput( inputs ) {
	for ( const input of inputs ) {
		if ( input.reporting.validityState.current ) {
			continue;
		}
		// eslint-disable-next-line no-unused-expressions
		!input.reporting.hasAutoScroll() && input.onFocus();
		break;
	}
}

function applyUserAgents() {
	for ( const [ name, isActive ] of Object.entries( environment ) ) {
		if ( !isActive ) {
			continue;
		}
		document.body.classList.add( `jet--ua-${ name }` );
	}
}

function isUA( browser ) {
	return environment?.[ browser ];
}

export {
	allRejected,
	getLanguage,
	setAttrs,
	toHTML,
	isEmpty,
	getOffsetTop,
	focusOnInvalidInput,
	isVisible,
	getScrollParent,
	isUA,
	applyUserAgents,
};