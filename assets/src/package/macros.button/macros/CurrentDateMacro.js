import BaseMacro from '../abstract/BaseMacro';

const { __ } = wp.i18n;

function CurrentDateMacro() {
	BaseMacro.call( this );

	this.name         = 'CurrentDate';
	this.isClientSide = true;

	this.fullHelp = () => <>
		{ __( 'Returns the current timestamp. Replacing', 'jet-form-builder' ) }
		{ ' ' }
		<code>Date.now()</code>
	</>;
}

CurrentDateMacro.prototype = Object.create( BaseMacro.prototype );

export default CurrentDateMacro;