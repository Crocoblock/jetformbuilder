import AdvancedRestriction from './AdvancedRestriction';

function NotUrl() {
	AdvancedRestriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return 'url' === node.type;
	};
	this.validate      = function () {
		const value = this.getValue();

		return (
			!value || /((mailto\:|(news|(ht|f)tp(s?))\:\/\/)\S+)/.test( value )
		);
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'url' );
	};
}

NotUrl.prototype = Object.create( AdvancedRestriction.prototype );

export default NotUrl;