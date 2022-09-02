import MustContainCharacters from './MustContainCharacters';

class MustNotContainCharacters extends MustContainCharacters {

	getSlug() {
		return 'contain_not';
	}

	validate() {
		return !super.validate();
	}

}

export default MustNotContainCharacters;