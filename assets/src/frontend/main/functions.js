import BaseHtmlAttr from './attrs/BaseHtmlAttr';
import MaxFilesHtmlAttr from './attrs/MaxFilesHtmlAttr';
import MaxFileSizeHtmlAttr from './attrs/MaxFileSizeHtmlAttr';
import RemainingCalcAttr from './attrs/RemainingCalcAttr';
import FileExtensionHtmlAttr from './attrs/FileExtensionHtmlAttr';

const { applyFilters } = wp.hooks;

/**
 * @param callbacks {Function[]}
 * @return {Promise<*>}
 */
async function allRejected( callbacks ) {
	const results = await Promise.allSettled(
		callbacks.map( current => new Promise( current ) ),
	);

	const invalid = results.filter(
		( { status } ) => 'rejected' === status,
	);

	return invalid.map( ( { reason, value } ) => (
		reason ?? value
	) );
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
		'minlength',
		'maxlength',
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
function getAttrs( input ) {
	if ( !inputHtmlAttrs.length ) {
		inputHtmlAttrs = getInputHtmlAttr();
	}

	const response = {};

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
		current.setInput( input );
		current.observe();

		response[ current.attrName ] = current;
	}

	return response;
}

export { allRejected, getLanguage, getAttrs };