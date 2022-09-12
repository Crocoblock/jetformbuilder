import ConditionItem from './ConditionItem';

function OrOperatorItem() {
	ConditionItem.call( this );

	this.isSupported = function ( options ) {
		return (
			options.or_operator ?? false
		);
	};
}

OrOperatorItem.prototype = Object.create( ConditionItem.prototype );

export default OrOperatorItem;