import AdvancedRestriction from './AdvancedRestriction';

function NotCompleteInputmask() {
	AdvancedRestriction.call( this );

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

NotCompleteInputmask.prototype = Object.create( AdvancedRestriction.prototype );

export default NotCompleteInputmask;