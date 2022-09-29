import Restriction from './Restriction';

function AdvancedRestriction() {
	Restriction.call( this );
}

AdvancedRestriction.prototype               = Object.create(
	Restriction.prototype,
);
AdvancedRestriction.prototype.attrs         = {};
AdvancedRestriction.prototype.setAttrs      = function ( attrs ) {
	this.attrs = attrs;
};
AdvancedRestriction.prototype.getSlug       = function () {
	throw new Error( 'you need to return slug of rule' );
};
AdvancedRestriction.prototype.getRawMessage = function () {
	return this.attrs?.message ?? '';
};

export default AdvancedRestriction;