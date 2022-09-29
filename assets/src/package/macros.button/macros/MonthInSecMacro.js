import BaseMacro from '../abstract/BaseMacro';

const { __ } = wp.i18n;

function MonthInSecMacro() {
	BaseMacro.call( this );

	this.name         = 'Month_In_MilliSec';
	this.isClientSide = true;

	this.help = __( 'Number of milliseconds in one month', 'jet-form-builder' );
}

MonthInSecMacro.prototype = Object.create( BaseMacro.prototype );

export default MonthInSecMacro;