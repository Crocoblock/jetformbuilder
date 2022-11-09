const {
	      select,
      } = wp.data;

/**
 * @param condition
 * @return {boolean|string}
 */
function humanReadableCondition( condition ) {
	const operator = select( 'jet-forms/block-conditions' ).getOperator(
		condition.operator,
	);

	if ( !operator ) {
		return false;
	}

}

export default humanReadableCondition;