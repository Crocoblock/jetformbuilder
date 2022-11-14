import CalculatedHtmlString from './CalculatedHtmlString';

/**
 * @param comment
 * @param root {Observable}
 */
function observeComment( comment, root ) {
	const formula = new CalculatedHtmlString( root );
	formula.observe( comment.textContent );

	if ( !formula.parts?.length ) {
		console.info(
			`Invalid macro ${ comment.textContent } in this scope`,
		);

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