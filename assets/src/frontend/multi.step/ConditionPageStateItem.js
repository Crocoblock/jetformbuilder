const { ConditionItem } = JetFormBuilderAbstract;

function ConditionPageStateItem() {
	ConditionItem.call( this );

	this.isSupported = function ( options ) {
		return !!options?.page_state?.length;
	};
	this.setOptions  = function ( { page_state } ) {
		this.pageState = page_state;
	};
	this.isPassed    = function () {
		const canSwitch = this.list?.block?.page?.canSwitch?.current;

		switch ( this.pageState ) {
			case 'active':
				return !canSwitch;
			default:
				return false;
		}
	};
}

ConditionPageStateItem.prototype = Object.create( ConditionItem.prototype );

export default ConditionPageStateItem;