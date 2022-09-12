import AdvancedRestriction from './AdvancedRestriction';

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

export default MustContainCharacters;