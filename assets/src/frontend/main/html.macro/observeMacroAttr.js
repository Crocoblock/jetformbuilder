import CalculatedHtmlString from './CalculatedHtmlString';

/**
 * @param node     {Node}
 * @param attrName {string}
 * @param root     {Observable}
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

export default observeMacroAttr;