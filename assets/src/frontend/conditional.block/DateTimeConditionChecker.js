import ConditionChecker from './ConditionChecker';

const {
	      getTimestamp,
      } = JetFormBuilderFunctions;
const {
	      Min_In_Sec,
	      Milli_In_Sec,
      } = JetFormBuilderConst;

const offset = new Date().getTimezoneOffset();

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
		const { time: current } = getTimestamp( input.value.current );
		let conditionValue      = condition.value.map( value => {
			const { time, type } = getTimestamp( value );

			if ( 'number' === type && condition.use_preset ) {
				return time * Milli_In_Sec + offset * Min_In_Sec;
			}

			return time;
		} );

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