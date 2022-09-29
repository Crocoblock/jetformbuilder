import BaseMacro from '../abstract/BaseMacro';

const { __ } = wp.i18n;

function DayInSecMacro() {
	BaseMacro.call( this );

	this.name         = 'Day_In_Sec';
	this.isClientSide = true;

	this.help = __( 'Number of milliseconds in one day', 'jet-form-builder' );
}

DayInSecMacro.prototype = Object.create( BaseMacro.prototype );

export default DayInSecMacro;