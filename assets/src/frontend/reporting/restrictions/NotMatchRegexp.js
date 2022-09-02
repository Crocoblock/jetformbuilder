import MatchRegexp from './MatchRegexp';

class NotMatchRegexp extends MatchRegexp {

	getSlug() {
		return 'regexp_not';
	}

	validate() {
		return !super.validate();
	}

}

export default NotMatchRegexp;