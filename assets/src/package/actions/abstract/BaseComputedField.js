function BaseComputedField() {
	/**
	 * @type {BaseAction}
	 */
	this.action = null;
	this.hasInList = false;
}

/**
 * @param action {BaseAction}
 * @param fields {Object[]}
 */
BaseComputedField.prototype.isSupported = function ( action, fields ) {
	return this.getSupportedActions().includes( action.type );
};

BaseComputedField.prototype.isSupportedGlobal = function () {
	return false;
};

/**
 * @return {String[]}
 */
BaseComputedField.prototype.getSupportedActions = function () {
	return [];
};

/**
 * @param action {BaseAction}
 */
BaseComputedField.prototype.setAction = function ( action ) {
	this.action = action;
};

/**
 * @return {string}
 */
BaseComputedField.prototype.getName = function () {
	return '';
};

/**
 * @return {string}
 */
BaseComputedField.prototype.getLabel = function () {
	return '';
};

/**
 * @return {string|Function}
 */
BaseComputedField.prototype.getHelp = function () {
	return '';
};

export default BaseComputedField;