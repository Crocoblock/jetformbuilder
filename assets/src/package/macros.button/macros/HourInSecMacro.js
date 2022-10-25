import BaseMacro from '../abstract/BaseMacro';

const { __ } = wp.i18n;

function HourInSecMacro() {
	BaseMacro.call( this );

	this.name         = 'Hour_In_Sec';
	this.isClientSide = true;

	this.help = __( 'Number of milliseconds in one hour', 'jet-form-builder' );
}

HourInSecMacro.prototype = Object.create( BaseMacro.prototype );

export default HourInSecMacro;