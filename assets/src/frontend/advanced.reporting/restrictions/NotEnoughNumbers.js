import Restriction from './Restriction';

function NotEnoughNumbers() {
	Restriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		return '' !== node?.min && node.type === 'number';
	};
	this.setReporting  = function ( reporting ) {
		const [ node ] = reporting.input.nodes;
		this.min       = +node?.min;

		Restriction.prototype.setReporting.call( this, reporting );
	};
	this.validate      = function () {
		return this.getValue() >= this.min;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'number_min' );
	};
}

NotEnoughNumbers.prototype = Object.create( Restriction.prototype );

export default NotEnoughNumbers;