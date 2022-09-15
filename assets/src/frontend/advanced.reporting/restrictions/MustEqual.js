import AdvancedRestriction from './AdvancedRestriction';

function MustEqual() {
	AdvancedRestriction.call( this );

	this.getSlug  = function () {
		return 'equal';
	};
	this.validate = function () {
		const value = String( this.getValue() );

		return value === this.attrs.value;
	};
}

MustEqual.prototype = Object.create(
	AdvancedRestriction.prototype,
);

export default MustEqual;