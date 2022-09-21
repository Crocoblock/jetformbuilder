import AdvancedRestriction from './AdvancedRestriction';
import { observeFieldRestriction } from '../functions';

function MatchRegexp() {
	AdvancedRestriction.call( this );

	this.getSlug  = function () {
		return 'regexp';
	};
	this.validate = function () {
		const value  = this.getValue();
		const regexp = new RegExp( this.attrs.value, 'gi' );

		return regexp.test( value );
	};
}

MatchRegexp.prototype = Object.create(
	AdvancedRestriction.prototype,
);
MatchRegexp.prototype.setAttrs = function ( attrs ) {
	AdvancedRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};


export default MatchRegexp;