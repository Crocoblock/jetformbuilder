import Restriction from './Restriction';

function NativeRestriction() {
	Restriction.call( this );

	// eslint-disable-next-line no-unused-vars
	this.isSupported = function ( node, reporting ) {
		return !!node.checkValidity;
	};

	this.validate = function () {
		const { nodes } = this.reporting.input;

		for ( const node of nodes ) {
			if ( node.checkValidity() ) {
				return true;
			}
		}

		return false;
	};
}

NativeRestriction.prototype = Object.create( Restriction.prototype );

export default NativeRestriction;