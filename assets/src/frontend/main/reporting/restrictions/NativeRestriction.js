import Restriction from './Restriction';

function NativeRestriction() {
	Restriction.call( this );

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