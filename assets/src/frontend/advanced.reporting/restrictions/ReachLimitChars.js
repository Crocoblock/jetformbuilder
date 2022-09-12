import Restriction from './Restriction';

function ReachLimitChars() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return 0 <= node?.maxLength;
	};
	this.setReporting  = function ( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.max       = node.maxLength;

		Restriction.prototype.setReporting.call( this, reporting );
	};
	this.validate      = function () {
		return this.getValue()?.length <= this.max;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'char_max' );
	};
}

ReachLimitChars.prototype = Object.create( Restriction.prototype );

export default ReachLimitChars;