import Restriction from './Restriction';

function NotEmail() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return 'email' === node.type;
	};
	this.validate      = function () {
		const value = this.getValue();

		return /^[\w-\.]+@([\w-]+\.)+[\w-]{1,6}$/.test( value );
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'email' );
	};
}

NotEmail.prototype = Object.create( Restriction.prototype );

export default NotEmail;