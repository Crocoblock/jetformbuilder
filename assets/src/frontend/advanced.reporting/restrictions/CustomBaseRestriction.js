import AdvancedRestriction from './AdvancedRestriction';

function CustomBaseRestriction() {
	AdvancedRestriction.call( this );
}

CustomBaseRestriction.prototype               = Object.create(
	AdvancedRestriction.prototype,
);
CustomBaseRestriction.prototype.attrs         = {};
CustomBaseRestriction.prototype.setAttrs      = function ( attrs ) {
	this.attrs = attrs;
};
CustomBaseRestriction.prototype.getSlug       = function () {
	throw new Error( 'you need to return slug of rule' );
};
CustomBaseRestriction.prototype.getRawMessage = function () {
	return this.attrs?.message ?? '';
};

export default CustomBaseRestriction;