import CustomBaseRestriction from './CustomBaseRestriction';
import { observeFieldRestriction } from '../functions';

function MatchRegexp() {
	CustomBaseRestriction.call( this );

	this.getSlug  = function () {
		return 'regexp';
	};
	this.validate = function () {
		const value = this.getValue();

		if ( !value ) {
			return true;
		}
		const regexp = new RegExp( this.attrs.value, 'g' );

		return regexp.test( value );
	};
}

MatchRegexp.prototype          = Object.create(
	CustomBaseRestriction.prototype,
);
MatchRegexp.prototype.setAttrs = function ( attrs ) {
	CustomBaseRestriction.prototype.setAttrs.call( this, attrs );
	observeFieldRestriction.call( this );
};

export default MatchRegexp;