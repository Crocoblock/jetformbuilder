import ConditionItem from './ConditionItem';

class ConditionPageStateItem extends ConditionItem {

	isSupported( options ) {
		return !!options?.page_state?.length;
	}

	setOptions( { page_state } ) {
		this.pageState = page_state;
	}

	isPassed() {
		switch ( this.pageState ) {
			case 'active':
				return ! this.block?.page?.canSwitch?.current;
			default:
				return false;
		}
	}

}

export default ConditionPageStateItem;