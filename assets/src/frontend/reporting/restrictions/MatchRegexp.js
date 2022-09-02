import AdvancedRestriction from './AdvancedRestriction';

class MatchRegexp extends AdvancedRestriction {

	getSlug() {
		return 'regexp';
	}

	validate() {
		const value = this.getValue();
		const regexp = new RegExp( this.attrs.value, 'gi' );

		return regexp.test( value );
	}

}

export default MatchRegexp;