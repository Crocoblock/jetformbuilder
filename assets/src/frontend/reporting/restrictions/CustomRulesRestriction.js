import Restriction from './Restriction';
import { getPreparedRules } from './functions';

class CustomRulesRestriction extends Restriction {

	isSupported( node, reporting ) {
		const root  = node.closest( '.jet-form-builder-row' );
		const rules = JSON.parse( root.dataset?.validationRules ?? '[]' );

		if ( !Boolean( rules.length ) ) {
			return false;
		}

		reporting.restrictions = [
			...reporting.restrictions,
			...getPreparedRules( rules, reporting ),
		];

		return false;
	}

}

export default CustomRulesRestriction;