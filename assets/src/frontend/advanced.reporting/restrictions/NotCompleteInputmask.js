import Restriction from '../../main/reporting/restrictions/Restriction';

function NotCompleteInputmask() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return (
			node.classList.contains( 'jet-form-builder__masked-field' ) &&
			jQuery.fn.inputmask
		);
	};
	this.validate      = function () {
		const value = this.getValue();
		const node  = this.reporting.getNode();

		return !value || node.inputmask.isComplete();
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'inputmask' );
	};
}

NotCompleteInputmask.prototype = Object.create( Restriction.prototype );

export default NotCompleteInputmask;