import ConditionChecker from './ConditionChecker';

function MultipleConditionChecker() {
	ConditionChecker.call( this );

	this.isSupported = function ( input ) {
		return input.isArray();
	};

	this.check = function ( condition, input ) {
		const { current } = input.value;

		switch ( condition.operator ) {
			case 'one_of':
				if ( !condition.value?.length ) {
					return false;
				}
				return current.some(
					val => -1 !== condition.value.indexOf( val ),
				);
			case 'contain':
				return current.some(
					val => val.indexOf( condition.value[ 0 ] ) !== -1,
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
