import AdvancedRestriction from './AdvancedRestriction';

class MustContainCharacters extends AdvancedRestriction {

	getSlug() {
		return 'contain';
	}

	validate() {
		const value = this.getValue();

		return value.includes( this.attrs.value );
	}

}

export default MustContainCharacters;