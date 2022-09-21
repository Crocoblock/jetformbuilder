import AdvancedRestriction from './AdvancedRestriction';
import { observeFieldRestriction } from '../functions';

function MustContainCharacters() {
	AdvancedRestriction.call( this );

	this.getSlug  = function () {
		return 'contain';
	};
	this.validate = function () {
		const value = this.getValue();

		return value.includes( this.attrs.value );
	};
}

MustContainCharacters.prototype = Object.create(
	AdvancedRestriction.prototype,
);
MustContainCharacters.prototype.setAttrs = function ( attrs ) {
	AdvancedRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};

export default MustContainCharacters;