function ConditionChecker() {
}

/**
 * @param condition {ConditionFieldItem}
 * @param input {InputData}
 */
ConditionChecker.prototype = {
	isSupported: () => true,
	check: function ( condition, input ) {
		const { current } = input.value;

		switch ( condition.operator ) {
			case 'equal':
				return current === condition.value;

			case 'greater':
				return parseFloat( current ) >
					parseFloat( condition.value );

			case 'less':
				return parseFloat( current ) <
					parseFloat( condition.value );

			case 'between':
				if ( 2 > condition.value?.length ) {
					return false;
				}

				const from  = parseFloat( condition.value[ 0 ] ),
				      to    = parseFloat( condition.value[ 1 ] ),
				      value = parseFloat( current );

				return (
					from <= value && value <= to
				);

			case 'one_of':
				if ( !condition.value?.length ) {
					return false;
				}

				return 0 <= condition.value.indexOf( current );

			case 'contain':
				return 0 <= current.indexOf( condition.value );

			default:
				return false;
		}
	},
};

export default ConditionChecker;