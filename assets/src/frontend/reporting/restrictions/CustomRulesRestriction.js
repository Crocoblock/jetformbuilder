import Restriction from './Restriction';

class CustomRulesRestriction extends Restriction {

	constructor() {
		super();

		this.rules = [];
	}

	isSupported( node, reporting ) {
		const root = node.closest( '.jet-form-builder-row' );
		this.rules = JSON.parse( root.dataset?.validationRules ?? '[]' );

		return Boolean( this.rules.length );
	}

}

export default CustomRulesRestriction;