import BaseHtmlAttr from './attrs/BaseHtmlAttr';
import MaxFilesHtmlAttr from './attrs/MaxFilesHtmlAttr';
import MaxFileSizeHtmlAttr from './attrs/MaxFileSizeHtmlAttr';
import RemainingCalcAttr from './attrs/RemainingCalcAttr';
import FileExtensionHtmlAttr from './attrs/FileExtensionHtmlAttr';

const { applyFilters } = JetPlugins.hooks;

/**
 * @param callbacks {Function[]}
 * @return {Promise<*>}
 */
async function allRejected( callbacks ) {
	const results = await Promise.allSettled(
		callbacks.map( current => new Promise( current ) ),
	);

	if ( window?.JetFormBuilderSettings?.devmode ) {
		console.group( 'allRejected' );
		console.info( ...results );
		console.groupEnd();
	}

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
function setAttrs( input ) {
	if ( !inputHtmlAttrs.length ) {
		inputHtmlAttrs = getInputHtmlAttr();
	}

	for ( let inputHtmlAttr of inputHtmlAttrs ) {
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

function isEmpty( value ) {
	return null === value || undefined === value || !value?.length;
}

export { allRejected, getLanguage, setAttrs, toHTML, isEmpty };