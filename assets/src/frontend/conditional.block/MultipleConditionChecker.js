import ConditionChecker from './ConditionChecker';

const {
	      CheckboxData,
	      MultiSelectData,
      } = JetFormBuilderAbstract;

function MultipleConditionChecker() {
	ConditionChecker.call( this );

	this.isSupported = function ( input ) {
		return (
			input instanceof CheckboxData
		) || (
			input instanceof MultiSelectData
		);
	};
	this.check       = function ( condition, input ) {
		const { current } = input.value;

		switch ( condition.operator ) {
			case 'one_of':
				return condition.value.length && current.some(
					val => 0 <= condition.value.indexOf( val ),
				);
			case 'contain':
				return current.some(
					val => val.indexOf( condition.value ) !== -1,
				);
			default:
				return false;
		}
	};
}

MultipleConditionChecker.prototype = Object.create(
	ConditionChecker.prototype,
);

export default MultipleConditionChecker;
