import Restriction from './Restriction';
import { getPreparedRules } from '../functions';

function CustomRulesRestriction() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
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
	};
}

CustomRulesRestriction.prototype = Object.create( Restriction.prototype );

export default CustomRulesRestriction;