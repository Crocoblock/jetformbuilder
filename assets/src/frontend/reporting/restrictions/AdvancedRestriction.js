import Restriction from './Restriction';

class AdvancedRestriction extends Restriction {

	constructor() {
		super();

		this.attrs = {};
	}

	/**
	 * @return {string}
	 */
	getSlug() {
		throw new Error( 'you need to return slug of rule' );
	}

	getRawMessage() {
		return this.attrs?.message ?? '';
	}
}

export default AdvancedRestriction;