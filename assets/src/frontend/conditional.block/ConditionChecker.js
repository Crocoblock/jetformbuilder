const {
	      isEmpty,
      } = JetFormBuilderFunctions;

function ConditionChecker() {
	this.operators = this.getOperators();
}

ConditionChecker.prototype = {
	/**
	 * @param  input {InputData} - currently checking input
	 * @return {boolean}
	 */
	// eslint-disable-next-line no-unused-vars
	isSupported: (input) => true,
	operators: {},
	getOperators () {
		return {
			equal: ( current, conditionValue ) => current ===
				conditionValue[ 0 ],
			empty: ( current ) => isEmpty( current ),
			greater: ( current, conditionValue ) => +(
				current
			) > +(
				conditionValue[ 0 ]
			),
			greater_or_eq: ( current, conditionValue ) => +(
				current
			) >= +(
				conditionValue[ 0 ]
			),
			less: ( current, conditionValue ) => +(
				current
			) < +(
				conditionValue[ 0 ]
			),
			less_or_eq: ( current, conditionValue ) => +(
				current
			) <= +(
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
		};
	},
	/**
	 * @param condition {ConditionFieldItem}
	 * @param input     {InputData}
	 */
	check ( condition, input ) {
		const current        = input.value.current;
		const conditionValue = condition.value;

		return this.checkRaw( condition.operator, current, conditionValue );
	},
	checkRaw ( operator, current, conditionValue ) {
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

		if ( !this.operators.hasOwnProperty( operatorName ) ) {
			return false;
		}

		return !this.operators[ operatorName ](
			current,
			conditionValue,
		);
	},
};

export default ConditionChecker;