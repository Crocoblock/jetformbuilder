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
// eslint-disable-next-line no-unused-vars
BaseComputedField.prototype.isSupported = function ( action, fields ) {
	return this.getSupportedActions().includes( action.type );
};

BaseComputedField.prototype.isSupportedGlobal = function () {
	return false;
};

/**
 * @return {string[]}
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

// backward compatibility
window.JetFBComponents = window.JetFBComponents || {};
window.JetFBComponents.BaseComputedField = BaseComputedField;

export default BaseComputedField;