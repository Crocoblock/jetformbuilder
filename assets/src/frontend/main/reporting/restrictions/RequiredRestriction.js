import Restriction from './Restriction';
import { isEmpty } from '../../functions';

function RequiredRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		return reporting.input.isRequired;
	};

	this.validate = function () {
		const { current } = this.reporting.input.value;

		return !isEmpty( current );
	};
}

RequiredRestriction.prototype = Object.create( Restriction.prototype );

export default RequiredRestriction;