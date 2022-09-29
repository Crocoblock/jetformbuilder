import BaseMacro from '../abstract/BaseMacro';

const { __ } = wp.i18n;

function MinInSecMacro() {
	BaseMacro.call( this );

	this.name         = 'Min_In_MilliSec';
	this.isClientSide = true;

	this.help = __(
		'Number of milliseconds in one minute',
		'jet-form-builder',
	);
}

MinInSecMacro.prototype = Object.create( BaseMacro.prototype );

export default MinInSecMacro;