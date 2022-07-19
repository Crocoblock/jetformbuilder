import ConditionChecker from './ConditionChecker';


class MultipleConditionChecker extends ConditionChecker {

	check( condition, input ) {
		switch ( condition.operator ) {
			case 'one_of':
				return condition.value.length && input.value.some(
					val => 0 <= condition.value.indexOf( val ),
				);
			case 'contain':
				return input.value.some( val => val.indexOf( condition.value ) !== - 1 );
			default:
				return false;
		}
	}

}

export default MultipleConditionChecker;