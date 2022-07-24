import ConditionChecker from './ConditionChecker';

class MultipleConditionChecker extends ConditionChecker {

	check( condition, input ) {
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
	}

}

export default MultipleConditionChecker;