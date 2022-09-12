/**
 * @property {ConditionalBlock} block
 */
function ConditionItem() {
	this.block = null;
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
ConditionItem.prototype.setBlock    = function ( block ) {
	this.block = block;
};

export default ConditionItem;