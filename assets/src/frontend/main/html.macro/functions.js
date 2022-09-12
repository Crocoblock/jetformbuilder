/**
 * @type {(HtmlMacro)[]}
 */
import HtmlMacro from './HtmlMacro';
import CheckboxHtmlMacro from './CheckboxHtmlMacro';

const htmlMacros = [
	CheckboxHtmlMacro,
	HtmlMacro,
];

const macrosPrefix = ( suffix = '' ) => 'JFB_FIELD::' + suffix;

/**
 * @param comment
 * @param root {Observable}
 * @returns {null|HtmlMacro}
 */
function observeComment( comment, root ) {
	const [ , fieldName ] = comment.textContent.split(
		'JFB_FIELD::',
	);

	const input = root.getInput( fieldName );

	if ( !input ) {
		console.groupCollapsed(
			`Undefined field name: ${ fieldName } in this scope`,
		);
		console.warn( 'Comment:', comment );
		console.groupEnd();

		return null;
	}

	for ( const current of htmlMacros ) {
		const macro = new current();

		if ( !macro.isSupported( input ) ) {
			continue;
		}

		macro.setRoot( root );
		macro.observeComment( input, comment );
		break;
	}
}

/**
 * @param node {Node}
 * @param attrName {string}
 * @param root {Observable}
 * @returns {null|HtmlMacro}
 */
function observeMacroAttr( node, attrName, root ) {
	const nodeValue = node[ attrName ] ?? '';

	if (
		'string' !== typeof nodeValue ||
		!nodeValue.toLowerCase().includes( macrosPrefix().toLowerCase() )
	) {
		return null;
	}

	const macro = new HtmlMacro();
	macro.setRoot( root );
	macro.observeMacroAttr( node, attrName );

	return macro;
}

function* iterateJfbComments( rootNode ) {
	const acceptCallback = node => {
		return node.textContent.includes( macrosPrefix() );
	};

	yield* iterateComments( rootNode, acceptCallback );
}

function* iterateComments(
	rootNode, acceptCallback = node => NodeFilter.FILTER_ACCEPT ) {
	// Fourth argument, which is actually obsolete according to the
	// DOM4 standard, is required in IE 11
	const iterator = document.createNodeIterator(
		rootNode,
		NodeFilter.SHOW_COMMENT,
		{
			acceptNode: acceptCallback,
		},
	);
	let curNode;

	while ( curNode = iterator.nextNode() ) {
		curNode.nodeValue = curNode.nodeValue.trim();

		yield curNode;
	}
}

const { replaceAttrs = [] } = window.JetFormBuilderSettings;

function queryByAttrValue( rootNode, value ) {
	const querySelector = [];

	for ( let i = 0; i < replaceAttrs.length; i++ ) {
		querySelector.push( `[${ replaceAttrs[ i ] }*="${ value }"]` );
	}

	return rootNode.querySelectorAll( querySelector.join( ', ' ) );
}

export {
	macrosPrefix,
	observeComment,
	observeMacroAttr,
	iterateComments,
	iterateJfbComments,
	queryByAttrValue,
};