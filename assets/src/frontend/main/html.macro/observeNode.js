import CalculatedHtmlString from './CalculatedHtmlString';

import { sprintf, __ } from '@wordpress/i18n';

/**
 * @param node {Node}
 * @param root {Observable}
 */
function observeNode( node, root ) {
	const formula = new CalculatedHtmlString( root, { withPrefix: false } );
	formula.observe( `%${ node.dataset.jfbMacro }%` );

	if ( !formula.parts?.length ) {
		/* eslint-disable no-console */
		console.group(
			__(
				'JetFormBuilder: You have invalid html macro',
				'jet-form-builder',
			),
		);
		console.error(
			sprintf(
				// translators: %s - macro
				__( 'Content: %s', 'jet-form-builder' ),
				node.dataset.jfbMacro,
			),
		);
		console.groupEnd();
		/* eslint-enable no-console */
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