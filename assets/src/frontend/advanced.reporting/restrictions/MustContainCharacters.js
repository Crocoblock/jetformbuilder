import CustomBaseRestriction from './AdvancedRestriction';
import { observeFieldRestriction } from '../functions';

function MustContainCharacters() {
	CustomBaseRestriction.call( this );

	this.getSlug  = function () {
		return 'contain';
	};
	this.validate = function () {
		const value = this.getValue();

		return !value || value.includes( this.attrs.value );
	};
}

MustContainCharacters.prototype          = Object.create(
	CustomBaseRestriction.prototype,
);
MustContainCharacters.prototype.setAttrs = function ( attrs ) {
	CustomBaseRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};

export default MustContainCharacters;