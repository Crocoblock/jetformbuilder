import Restriction from './Restriction';

function NotUrl() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return 'url' === node.type;
	};
	this.validate      = function () {
		return /((mailto\:|(news|(ht|f)tp(s?))\:\/\/)\S+)/.test(
			this.getValue(),
		);
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'url' );
	};
}

NotUrl.prototype = Object.create( Restriction.prototype );

export default NotUrl;