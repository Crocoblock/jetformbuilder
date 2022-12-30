import Restriction from './Restriction';

function RequiredRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return reporting.input.isRequired && !Boolean( node.checkValidity );
	};

	this.validate = function () {
		const [ node ] = this.reporting.input.nodes;

		return !!node.value;
	};
}

RequiredRestriction.prototype = Object.create( Restriction.prototype );

export default RequiredRestriction;