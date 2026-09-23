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

	const macroValue = 'placeholder' === attrName && /^<!--(JFB_FIELD::.+)-->$/.test( nodeValue )
		? nodeValue.slice( 4, -3 )
		: nodeValue;

	const formula = new CalculatedHtmlString( root );
	formula.observe( macroValue );

	formula.setResult = () => {
		node[ attrName ] = formula.calculateString();
	};
	formula.setResult();
}

export default observeMacroAttr;
