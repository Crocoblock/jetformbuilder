import Restriction from './Restriction';

function HiddenRequiredRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return 'hidden' === node.type && reporting.isRequired;
	};

	this.validate = function () {
		const { nodes } = this.reporting.input;

		return !!nodes[ 0 ].value;
	};
}

HiddenRequiredRestriction.prototype = Object.create( Restriction.prototype );

export default HiddenRequiredRestriction;