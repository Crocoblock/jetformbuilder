import ConditionChecker from './ConditionChecker';

const { getTimestamp } = JetFormBuilderFunctions;

function DateTimeConditionChecker() {
	ConditionChecker.call( this );

	this.isSupported = function ( input ) {
		const [ node ] = input.nodes;

		return [ 'date', 'time', 'datetime-local' ].includes( node.type );
	};

	/**
	 * @param condition {ConditionFieldItem}
	 * @param input {InputData}
	 */
	this.check = function ( condition, input ) {
		const current        = getTimestamp( input.value.current );
		const conditionValue = condition.value.map( getTimestamp );

		switch ( condition.operator ) {
			case 'equal':
				return current === conditionValue[ 0 ];
			case 'greater':
				return current > conditionValue[ 0 ];
			case 'less':
				return current < conditionValue[ 0 ];
			case 'between':
				if ( !conditionValue?.length ) {
					return false;
				}

				return (
					conditionValue[ 0 ] <= current &&
					current <= conditionValue[ 1 ]
				);
			default:
				return false;
		}
	};
}

DateTimeConditionChecker.prototype = Object.create(
	ConditionChecker.prototype,
);

export default DateTimeConditionChecker;