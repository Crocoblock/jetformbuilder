import AdvancedRestriction from './AdvancedRestriction';

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

export default MatchRegexp;