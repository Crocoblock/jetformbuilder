import AdvancedRestriction from './AdvancedRestriction';
import { observeFieldRestriction } from '../functions';

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

MustEqual.prototype          = Object.create(
	AdvancedRestriction.prototype,
);
MustEqual.prototype.setAttrs = function ( attrs ) {
	AdvancedRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};

export default MustEqual;