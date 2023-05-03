import CustomBaseRestriction from './CustomBaseRestriction';
import { observeFieldRestriction } from '../functions';

function MustContainCharacters() {
	CustomBaseRestriction.call( this );

	this.getSlug  = function () {
		return 'contain';
	};

}

MustContainCharacters.prototype          = Object.create(
	CustomBaseRestriction.prototype,
);
MustContainCharacters.prototype.setAttrs = function ( attrs ) {
	CustomBaseRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};

MustContainCharacters.prototype.validate = function () {
	const value = this.getValue();

	return !value || value.includes( this.attrs.value );
};

export default MustContainCharacters;