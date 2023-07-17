import Restriction from './Restriction';
import { isEmpty } from '../../functions';

function RequiredRestriction() {
	Restriction.call( this );

	this.type = 'required';
}

RequiredRestriction.prototype = Object.create( Restriction.prototype );

RequiredRestriction.prototype.isSupported = function ( node, reporting ) {
	return reporting.input.isRequired;
};

RequiredRestriction.prototype.validate = function () {
	const { current } = this.reporting.input.value;

	return !isEmpty( current );
};

export default RequiredRestriction;