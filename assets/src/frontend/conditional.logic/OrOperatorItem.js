import ConditionItem from './ConditionItem';

class OrOperatorItem extends ConditionItem {

	isSupported( options ) {
		return (
			options.or_operator ?? false
		);
	}

}

export default OrOperatorItem;