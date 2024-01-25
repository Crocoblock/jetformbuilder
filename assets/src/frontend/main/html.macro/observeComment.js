import CalculatedHtmlString from './CalculatedHtmlString';

const {
	      __,
	      sprintf,
      } = wp.i18n;

/**
 * @param comment
 * @param root    {Observable}
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
			),
		);
		console.groupEnd();
		formula.clearWatchers();

		return;
	}

	const wrapper = document.createElement( 'span' );

	const prevSibling = comment.parentNode.insertBefore(
		wrapper,
		comment,
	);

	formula.setResult = () => {
		prevSibling.innerHTML = formula.calculateString();
	};
	formula.setResult();
	comment.jfbObserved = true;
}

export default observeComment;