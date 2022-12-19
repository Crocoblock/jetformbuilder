const {
	      select,
      } = wp.data;

/**
 * @param rule
 * @return {boolean|string}
 */
function humanReadableRule( rule ) {
	return select( 'jet-forms/validation' ).readRule( rule );
}

export default humanReadableRule;