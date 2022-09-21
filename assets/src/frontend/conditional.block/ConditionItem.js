/**
 * @property {ConditionsList|ConditionsBlockList} list
 */
function ConditionItem() {
}

ConditionItem.prototype.isSupported = function ( options ) {
	return false;
};
ConditionItem.prototype.observe     = function () {
};
ConditionItem.prototype.setOptions  = function ( options ) {
};
ConditionItem.prototype.isPassed    = function () {
	throw new Error(
		'You must provide ConditionItem::isPassed function',
	);
};
ConditionItem.prototype.setList     = function ( list ) {
	this.list = list;
};

export default ConditionItem;