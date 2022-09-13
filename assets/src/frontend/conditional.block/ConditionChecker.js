function ConditionChecker() {
}

const prepareValue = value => {
	if ( Array.isArray( value ) ) {
		return value.map( prepareValue );
	}
	if ( !value && 0 !== value ) {
		return value;
	}
	return Number.isNaN( Number( value ) ) ? value : Number( value );
};

/**
 * @param condition {ConditionFieldItem}
 * @param input {InputData}
 */
ConditionChecker.prototype = {
	isSupported: () => true,
	check: function ( condition, input ) {
		const current        = prepareValue( input.value.current );
		const conditionValue = prepareValue( condition.value );

		switch ( condition.operator ) {
			case 'equal':
				return current === conditionValue;

			case 'greater':
				return current > conditionValue;

			case 'less':
				return current < conditionValue;

			case 'between':
				if ( !conditionValue?.length ) {
					return false;
				}

				return (
					conditionValue[ 0 ] <= current &&
					current <= conditionValue[ 1 ]
				);

			case 'one_of':
				if ( !conditionValue?.length ) {
					return false;
				}

				return 0 <= conditionValue.indexOf( current );

			case 'contain':
				return 0 <= current.indexOf( conditionValue );

			default:
				return false;
		}
	},
};

export default ConditionChecker;