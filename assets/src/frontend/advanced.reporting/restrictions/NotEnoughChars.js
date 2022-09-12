import Restriction from './Restriction';

function NotEnoughChars() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return 0 <= node?.minLength;
	};
	this.setReporting  = function ( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.min       = node.minLength;

		Restriction.prototype.setReporting.call( this, reporting );
	};
	this.validate      = function () {
		return this.getValue()?.length >= this.min;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'char_min' );
	};
}

NotEnoughChars.prototype = Object.create( Restriction.prototype );

export default NotEnoughChars;