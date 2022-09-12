import ConditionItem from './ConditionItem';

function ConditionPageStateItem() {
	ConditionItem.call( this );

	this.isSupported = function ( options ) {
		return !!options?.page_state?.length;
	};
	this.setOptions  = function ( { page_state } ) {
		this.pageState = page_state;
	};
	this.isPassed    = function () {
		switch ( this.pageState ) {
			case 'active':
				return !this.block?.page?.canSwitch?.current;
			default:
				return false;
		}
	};
}

ConditionPageStateItem.prototype = Object.create( ConditionItem.prototype );

export default ConditionPageStateItem;