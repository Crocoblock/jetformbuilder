import Restriction from './Restriction';

function NotCompleteInputmask() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return (
			node.classList.contains( 'jet-form-builder__masked-field' ) &&
			jQuery.fn.inputmask
		);
	};
	this.validate      = function () {
		const node = this.reporting.getNode();

		return node.inputmask.isComplete();
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'inputmask' );
	};
}

NotCompleteInputmask.prototype = Object.create( Restriction.prototype );

export default NotCompleteInputmask;