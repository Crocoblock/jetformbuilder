const {
	      select,
      } = wp.data;

/**
 * @param  condition
 * @return {boolean|string}
 */
function humanReadableCondition( condition ) {
	return select( 'jet-forms/block-conditions' ).readCondition( condition );
}

export default humanReadableCondition;