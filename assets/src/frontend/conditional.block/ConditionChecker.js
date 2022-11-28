const {
	      isEmpty,
      } = JetFormBuilderFunctions;

function ConditionChecker() {
}

ConditionChecker.prototype = {
	/**
	 * @param input {InputData}
	 * @return {boolean}
	 */
	isSupported: ( input ) => true,
	operators: {
		equal: ( current, conditionValue ) => current === conditionValue[ 0 ],
		empty: ( current ) => isEmpty( current ),
		greater: ( current, conditionValue ) => +(
			current
		) > +(
			conditionValue[ 0 ]
		),
		less: ( current, conditionValue ) => +(
			current
		) < +(
			conditionValue[ 0 ]
		),
		between: ( current, conditionValue ) => {
			if ( !conditionValue?.length || null === current ) {
				return false;
			}

			return (
				conditionValue[ 0 ] <= +current &&
				+current <= conditionValue[ 1 ]
			);
		},
		one_of: ( current, conditionValue ) => {
			if ( !conditionValue?.length ) {
				return false;
			}

			return 0 <= conditionValue.indexOf( current );
		},
		contain: ( current, conditionValue ) => {
			if ( !current ) {
				return false;
			}
			return 0 <= current.indexOf( conditionValue[ 0 ] );
		},

	},
	/**
	 * @param condition {ConditionFieldItem}
	 * @param input {InputData}
	 */
	check: function ( condition, input ) {
		const current        = input.value.current;
		const conditionValue = condition.value;

		return this.checkRaw( condition.operator, current, conditionValue );
	},
	checkRaw: function ( operator, current, conditionValue ) {
		if ( this.operators.hasOwnProperty( operator ) ) {
			return this.operators[ operator ](
				current,
				conditionValue,
			);
		}

		if ( 0 !== operator.indexOf( 'not_' ) ) {
			return false;
		}

		const operatorName = operator.slice( 4 );

		return !this.operators[ operatorName ](
			current,
			conditionValue,
		);
	},
};

export default ConditionChecker;