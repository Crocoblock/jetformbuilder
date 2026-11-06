import CalculatedHtmlString from './CalculatedHtmlString';
import {
	URL_MACRO_ATTRS,
	getStaticTemplate,
	isAllowedMacroUrl,
	isForbiddenMacroAttr,
} from './macroUrl';

/**
 * @param node     {Node}
 * @param attrName {string}
 * @param root     {Observable}
 */
function observeMacroAttr( node, attrName, root ) {
	if ( isForbiddenMacroAttr( attrName ) ) {
		return null;
	}

	const nodeValue = node[ attrName ] ?? '';

	if ( 'string' !== typeof nodeValue ) {
		return null;
	}

	const macroValue = 'placeholder' === attrName && /^<!--(JFB_FIELD::.+)-->$/.test( nodeValue )
		? nodeValue.slice( 4, -3 )
		: nodeValue;

	const formula = new CalculatedHtmlString( root );
	formula.observe( macroValue );

	const isUrlAttr = URL_MACRO_ATTRS.includes( String( attrName ).toLowerCase() );
	// The parts do not change after observe(), so the template is built once.
	const template  = isUrlAttr
		? getStaticTemplate( formula.parts, formula.formula ?? macroValue )
		: '';

	formula.setResult = () => {
		const result = formula.calculateString();

		/**
		 * href/src: a field value must not introduce a scheme outside the
		 * WordPress allowed protocols (e.g. a script URL). The attribute is
		 * removed instead and comes back once the value is a valid URL again;
		 * a scheme typed by the form author is kept.
		 */
		if (
			isUrlAttr &&
			! isAllowedMacroUrl( result, template )
		) {
			node.removeAttribute( attrName );

			return;
		}

		node[ attrName ] = result;
	};
	formula.setResult();
}

export default observeMacroAttr;
