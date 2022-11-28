import ConditionChecker from './ConditionChecker';

function MultipleConditionChecker() {
	ConditionChecker.call( this );

	this.operators.one_of = ( current, conditionValues ) => {
		if ( !conditionValues?.length || !current?.length ) {
			return false;
		}
		return current.some(
			val => -1 !== conditionValues.indexOf( val ),
		);
	};

	this.operators.contain = ( current, conditionValues ) => {
		if ( !current?.length ) {
			return false;
		}
		return current.some(
			val => val.indexOf( conditionValues[ 0 ] ) !== -1,
		);
	};

	this.isSupported = function ( input ) {
		return input.isArray();
	};
}

MultipleConditionChecker.prototype = Object.create(
	ConditionChecker.prototype,
);

export default MultipleConditionChecker;
