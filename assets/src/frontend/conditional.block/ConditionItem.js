/**
 * @property {ConditionsList|ConditionsBlockList} list Object with conditions
 */
function ConditionItem() {
}

// eslint-disable-next-line no-unused-vars
ConditionItem.prototype.isSupported = function ( options ) {
	return false;
};
ConditionItem.prototype.observe     = function () {
};
// eslint-disable-next-line no-unused-vars
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