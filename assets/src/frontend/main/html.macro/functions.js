import CalculatedHtmlString from './CalculatedHtmlString';

const {
	      __,
	      sprintf,
      } = wp.i18n;

/**
 * @param comment
 * @param root {Observable}
 */
function observeComment( comment, root ) {
	const formula = new CalculatedHtmlString( root );
	formula.observe( comment.textContent );

	if ( !formula.parts?.length ) {
		console.group(
			__(
				'JetFormBuilder: You have invalid html macro',
				'jet-form-builder',
			),
		);
		console.error(
			sprintf(
				__( 'Content: %s', 'jet-form-builder' ),
				comment.textContent,
			)
		);
		console.groupEnd();
		formula.clearWatchers();

		return;
	}

	const wrapper = document.createElement( 'span' );

	let prevSibling = comment.parentNode.insertBefore(
		wrapper,
		comment,
	);

	formula.setResult = () => {
		prevSibling.innerHTML = formula.calculateString();
	};
	formula.setResult();
	comment.jfbObserved = true;
}

/**
 * TODO: https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
 *
 * @param commentNode
 * @param root
 */
function findClosestField( commentNode, root ) {
	// it could inside label or description
	// it could be
}

/**
 * @param node {Node}
 * @param attrName {string}
 * @param root {Observable}
 * @returns {null|HtmlMacro}
 */
function observeMacroAttr( node, attrName, root ) {
	const nodeValue = node[ attrName ] ?? '';

	if ( 'string' !== typeof nodeValue ) {
		return null;
	}

	const formula = new CalculatedHtmlString( root );
	formula.observe( nodeValue );

	formula.setResult = () => {
		node[ attrName ] = formula.calculateString();
	};
	formula.setResult();
}

function* iterateJfbComments( rootNode ) {
	const acceptCallback = node => {
		return node.textContent.includes( 'JFB_FIELD::' );
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

function queryByAttrValue( rootNode, value ) {
	const { replaceAttrs = [] } = window.JetFormBuilderSettings;

	const querySelector = [];

	for ( let i = 0; i < replaceAttrs.length; i++ ) {
		querySelector.push( `[${ replaceAttrs[ i ] }*="${ value }"]` );
	}

	return rootNode.querySelectorAll( querySelector.join( ', ' ) );
}

export {
	observeComment,
	observeMacroAttr,
	iterateComments,
	iterateJfbComments,
	queryByAttrValue,
};