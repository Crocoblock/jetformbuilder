import AdvancedRestriction from './AdvancedRestriction';

function NotEmail() {
	AdvancedRestriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return 'email' === node.type;
	};
	this.validate      = function () {
		const value = this.getValue();

		return !value || /^[\w-\.\+]+@([\w-]+\.)+[\w-]{1,6}$/.test( value );
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'email' );
	};
}

NotEmail.prototype = Object.create( AdvancedRestriction.prototype );

export default NotEmail;