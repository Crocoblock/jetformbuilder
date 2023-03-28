import ConditionChecker from './ConditionChecker';

function CalculatedFieldChecker() {
	ConditionChecker.call( this );

	this.isSupported = function ( input ) {
		return 'calculated' === input.inputType;
	};

	/**
	 * @param condition {ConditionFieldItem}
	 * @param input {InputData}
	 */
	this.check = function ( condition, input ) {
		const current        = input.calcValue;
		const conditionValue = condition.value;

		return this.checkRaw( condition.operator, current, conditionValue );
	};
}

CalculatedFieldChecker.prototype = Object.create(
	ConditionChecker.prototype,
);

export default CalculatedFieldChecker;