import CustomBaseRestriction from './CustomBaseRestriction';
import { observeFieldRestriction } from '../functions';

function MustEqual() {
	CustomBaseRestriction.call( this );

	this.getSlug  = function () {
		return 'equal';
	};
	this.validate = function () {
		const value = String( this.getValue() );

		return !value || value === this.attrs.value;
	};
}

MustEqual.prototype          = Object.create(
	CustomBaseRestriction.prototype,
);
MustEqual.prototype.setAttrs = function ( attrs ) {
	CustomBaseRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};

export default MustEqual;