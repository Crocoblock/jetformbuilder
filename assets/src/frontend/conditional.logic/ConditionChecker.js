class ConditionChecker {

	/**
	 * @param condition {ConditionItem}
	 * @param input {InputData}
	 */
	check( condition, input ) {
		switch ( condition.operator ) {
			case 'equal':
				return input.value === condition.value;

			case 'greater':
				return parseFloat( input.value ) > parseFloat( condition.value );

			case 'less':
				return parseFloat( input.value ) < parseFloat( condition.value );

			case 'between':
				if ( 2 > condition.value?.length ) {
					return false;
				}

				const from = parseFloat( condition.value[ 0 ] ),
					to = parseFloat( condition.value[ 1 ] ),
					value = parseFloat( input.value );

				return (
					from <= value && value <= to
				);

			case 'one_of':
				if ( ! condition.value?.length ) {
					return false;
				}

				return 0 <= condition.value.indexOf( input.value );

			case 'contain':
				return 0 <= input.value.indexOf( condition.value );

			default:
				return false;
		}
	}
}

export default ConditionChecker;