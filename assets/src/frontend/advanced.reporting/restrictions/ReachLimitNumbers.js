import Restriction from './Restriction';

function ReachLimitNumbers() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return '' !== node?.min && 'number' === node.type;
	};
	this.setReporting  = function ( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.max       = +node.max;

		Restriction.prototype.setReporting.call( this, reporting );
	};
	this.validate      = function () {
		return this.getValue() <= this.max;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'number_max' );
	};
}

ReachLimitNumbers.prototype = Object.create( Restriction.prototype );

export default ReachLimitNumbers;