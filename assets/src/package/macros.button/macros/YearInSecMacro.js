import BaseMacro from '../abstract/BaseMacro';

const { __ } = wp.i18n;

function YearInSecMacro() {
	BaseMacro.call( this );

	this.name         = 'Year_In_MilliSec';
	this.isClientSide = true;

	this.help = __( 'Number of milliseconds in one year', 'jet-form-builder' );
}

YearInSecMacro.prototype = Object.create( BaseMacro.prototype );

export default YearInSecMacro;