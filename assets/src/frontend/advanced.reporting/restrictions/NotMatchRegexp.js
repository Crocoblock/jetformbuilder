import MatchRegexp from './MatchRegexp';

function NotMatchRegexp() {
	MatchRegexp.call( this );

	this.getSlug  = function () {
		return 'regexp_not';
	};
	this.validate = function () {
		return !MatchRegexp.prototype.validate.call( this );
	};
}

NotMatchRegexp.prototype = Object.create( MatchRegexp.prototype );

export default NotMatchRegexp;