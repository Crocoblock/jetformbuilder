import BasePopoverItem from './BasePopoverItem';

function BaseMacro() {
	BasePopoverItem.call( this );
}

BaseMacro.prototype = Object.create( BasePopoverItem.prototype );

/**
 * Can be used in Send Email action & other actions...
 */
BaseMacro.prototype.isServerSide = false;

/**
 * Can be used in Calculated field & other field attributes
 */
BaseMacro.prototype.isClientSide = false;

/**
 * Ex.: CurrentDate
 */
BaseMacro.prototype.name = '';

/**
 * With namespace
 * Ex.: CT
 */
BaseMacro.prototype.namespace = 'CT';

/**
 * @type {null | string | Function}
 */
BaseMacro.prototype.help = null;

BaseMacro.prototype.fullHelp = function () {
	return this.help;
};

BaseMacro.prototype.fullName = function () {
	return `%${ this.namespace }::${ this.name }%`;
};

export default BaseMacro;