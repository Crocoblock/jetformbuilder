import CalculatedHtmlString from './CalculatedHtmlString';

const {
	      __,
      } = wp.i18n;

/**
 * @param node {Node}
 * @param root {Observable}
 */
function observeNode( node, root ) {
	const formula = new CalculatedHtmlString( root, { withPrefix: false } );
	formula.observe( `%${ node.dataset.jfbMacro }%` );

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
				node.dataset.jfbMacro,
			),
		);
		console.groupEnd();
		formula.clearWatchers();

		return;
	}

	node.dataset.jfbObserved = 1;

	formula.setResult = () => {
		node.innerHTML = formula.calculateString();
	};
	formula.setResult();
}

export default observeNode;