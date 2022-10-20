import MustContainCharacters from './MustContainCharacters';

function MustNotContainCharacters() {
	MustContainCharacters.call( this );

	this.getSlug  = function () {
		return 'contain_not';
	};
	this.validate = function () {
		const value = this.getValue();

		return !value || !MustContainCharacters.prototype.validate.call( this );
	};
}

MustNotContainCharacters.prototype = Object.create(
	MustContainCharacters.prototype,
);

export default MustNotContainCharacters;